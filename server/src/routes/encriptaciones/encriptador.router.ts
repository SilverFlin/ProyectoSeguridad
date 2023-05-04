import express from "express";

import {
    httpGetHash,
    httpGetTexto,
} from "./encriptador.controller.js";

import { checkLoggedIn } from "../../middlewares.js";

const encriptadorRouter = express.Router();

encriptadorRouter.get("/encriptar/:texto", checkLoggedIn, httpGetHash);
encriptadorRouter.get("/desencriptar/:texto", checkLoggedIn, httpGetTexto);


export default encriptadorRouter;