import express from "express";

import {
    httpGetHash,
    httpGetTexto,
} from "./encriptador.controller.js";

const encriptadorRouter = express.Router();

encriptadorRouter.get("/encriptar/:texto", httpGetHash);
encriptadorRouter.get("/desencriptar/:texto", httpGetTexto);


export default encriptadorRouter;