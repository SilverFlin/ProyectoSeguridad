import express from "express";
import encriptadorRouter from "./encriptaciones/encriptador.router";

const api = express.Router();

api.use("/", encriptadorRouter); // Monta el router del encriptador
// api.use("/auth", authRouter); // TODO montar router de auth

export { api };