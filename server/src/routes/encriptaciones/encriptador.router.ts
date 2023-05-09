import express from "express";

import {
    httpGetHash,
    httpGetTexto,
} from "./encriptador.controller.js";

import { checkLoggedIn } from "../../middlewares.js";

const encriptadorRouter = express.Router();

encriptadorRouter.post("/encriptar", checkLoggedIn, httpGetHash);


encriptadorRouter.post("/desencriptar", checkLoggedIn, httpGetTexto);


export default encriptadorRouter;