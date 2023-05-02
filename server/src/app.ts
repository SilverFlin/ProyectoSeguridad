import express, { Request, Response } from "express"
import * as path from "path";
import cors from "cors";
import { api } from "./routes/api";
import helmet from "helmet"
// import passport from "passport"

const CLIENT_URL = "https://3.101.55.34:5173"

const app = express();

/**
 * Middleware que permite las peticiones del url del cliente,
 *  desactivar esto generaría un error por políticas de CORS.
 */
app.use(cors({ origin: CLIENT_URL }))
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            connectSrc: ["'self'", 'https://3.101.55.34:8000']
        }
    }
}));

// app.use(passport.initialize())
// app.use(passport.session())

app.use(express.static(path.join(path.resolve(path.dirname("")), "public"))); // Serving the build folder of the front-end

/**
 * Monta las rutas de la primer versión de la API.
 */
app.use("/v1", api)


app.get("/*", (req, res) => {
    // Loading the static page in the root
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;