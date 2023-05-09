import { Request, Response } from "express";
import * as encriptador from "./encriptador.services";

async function httpGetHash(req: Request, res: Response) {
    const texto = req.body.texto;

    return res.json({
        data: {
            hash: encriptador.encriptar(texto)
        },
        status: 200
    })
}

async function httpGetTexto(req: Request, res: Response) {
    const hash = req.body.hash;

    return res.json({
        data: {
            texto: encriptador.desencriptar(hash)
        },
        status: 200
    })


}

export { httpGetHash, httpGetTexto }