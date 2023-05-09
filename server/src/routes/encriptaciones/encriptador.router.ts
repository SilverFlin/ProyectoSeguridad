import express from "express";

import {
    httpGetHash,
    httpGetTexto,
} from "./encriptador.controller.js";

import { checkLoggedIn } from "../../middlewares.js";

const encriptadorRouter = express.Router();

encriptadorRouter.post("/encriptar", httpGetHash);


encriptadorRouter.post("/desencriptar", httpGetTexto);


export default encriptadorRouter;