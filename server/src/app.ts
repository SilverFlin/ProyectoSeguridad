import * as path from "path";

import express, { Request, Response, json } from "express"
import { api } from "./routes/api";

import helmet from "helmet"
import cors from "cors";

import cookieSession from "cookie-session"
import { Profile, Strategy } from 'passport-google-oauth20'
import passport from "passport";

require("dotenv").config()

const CLIENT_URL_PROD = "https://3.101.55.34:5173"
const CLIENT_URL_DEV = `https://localhost:${process.env.PORT}`
const CLIENT_URL = process.env.isProd === "true" ? CLIENT_URL_PROD : CLIENT_URL_DEV

/* Credenciales Navegador*/
const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2,
}

/* Configurando estretegia de Passport*/
function verifyCallback(_accessToken: unknown, _refreshToken: unknown, profile: unknown, done: Function) {
    done(null, profile)
}
passport.use(new Strategy({
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID as string,
    clientSecret: config.CLIENT_SECRET as string,
}, verifyCallback))

/* Guardar sesión a cookies */

interface GoogleUser extends Express.User {
    photos: [{ value: string }]
}

passport.serializeUser((user: Express.User, done) => {
    // Taking only the id to use less cookie memory.
    user = user as GoogleUser;
    const imageURL = (user as GoogleUser).photos[0].value
    done(null, { id: (user as Profile).id, imageURL })
})

/* Read the session from the cookie */
passport.deserializeUser((id: Express.User, done) => {
    // Por si se ocupa guardar algo en la base de datos segun el usuario
    done(null, id)
})


const app = express();

/**
 * Middleware que permite las peticiones del url del cliente,
 *  desactivar esto generaría un error por políticas de CORS.
 */
app.use(json())
app.use(cors({ origin: CLIENT_URL }))
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            connectSrc: ["'self'", 'https://3.101.55.34:8000'],
            // connectSrc: ["'self'", 'https://lh3.googleusercontent.com'],
            "img-src": ["'self'", "https: data:"]


        }
    }
}));

app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    // two keys to change change the keys that are being used
    keys: [config.COOKIE_KEY_1 as string, config.COOKIE_KEY_2 as string]
}))

app.use(passport.initialize())
app.use(passport.session())



app.use(express.static(path.join(path.resolve(path.dirname("")), "public"))); // Serving the build folder of the front-end


/**
 * Monta las rutas de la primer versión de la API.
 */
app.use("/v1", api)

// TODO mover
/* Auth */
app.get("/auth/google", passport.authenticate('google', {
    /* Things to get from the user */
    scope: ['email', 'profile']
}))

app.get("/auth/logout", (req, res) => {
    req.logOut((err) => {
        console.error(err)
    });
    return res.redirect('/')
})

app.get("/auth/google/callback",
    passport.authenticate('google', {
        failureRedirect: '/failure',
        successRedirect: '/',
        session: true
    }), (req, res) => {
        console.log('Google called us back')
    })

app.get("/user/current", (req: Request, res: Response) => {
    const passportSession = req.session?.passport.user;
    const imageURL = passportSession.imageURL;
    return res.json({ imageURL })
})




app.get("/", (req, res) => {
    // Loading the static page in the root
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;