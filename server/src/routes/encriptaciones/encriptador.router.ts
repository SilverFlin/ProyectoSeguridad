import express from "express";

import {
    httpGetHash,
    httpGetTexto,
} from "./encriptador.controller.js";

import { checkLoggedIn } from "../../middlewares.js";

const encriptadorRouter = express.Router();

encriptadorRouter.get("/encriptar", httpGetHash);


encriptadorRouter.get("/desencriptar", httpGetTexto);


export default encriptadorRouter;