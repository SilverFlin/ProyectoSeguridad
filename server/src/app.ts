import express, { Request, Response } from "express"
import cors from "cors";
import { api } from "./routes/api";
import helmet from "helmet"

const CLIENT_URL = "http://localhost:5173"

const app = express();

/**
 * Middleware que permite las peticiones del url del cliente,
 *  desactivar esto generaría un error por políticas de CORS.
 */
app.use(cors({ origin: CLIENT_URL }))
app.use(helmet())

// TODO montar página estática.

/**
 * Monta las rutas de la primer versión de la API.
 */
app.use("/v1", api)

export default app;