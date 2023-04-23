import express, { Request, Response } from "express"
import cors from "cors";
import { api } from "./routes/api";

const CLIENT_URL = "http://localhost:5173"

const app = express();

/**
 * Middleware que permite las peticiones del url del cliente,
 *  desactivar esto generaría un error por políticas de CORS.
 */
app.use(cors({ origin: CLIENT_URL }))

// TODO montar página estática.

/**
 * Monta las rutas de la primer versión de la API.
 */
app.use("/v1", api)

export default app;