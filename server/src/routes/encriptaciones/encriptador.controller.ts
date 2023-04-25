import { Request, Response } from "express";
import * as encriptador from "./encriptador.services";

async function httpGetHash(req: Request, res: Response) {
    const hash = req.params.hash;

    return res.json({
        data: {
            texto: await encriptador.desencriptar(hash)
        },
        status: 200
    })
}

async function httpGetTexto(req: Request, res: Response) {
    const textoEncriptar = req.params.texto;

    return await encriptador.encriptar(textoEncriptar)
        .then((data) => {
            return res.status(200).json({
                data: { hash: data },
                status: 200
            })
        })
        .catch((err) => {
            return res.status(400).json({
                error: err,
                status: 400
            })
        })
}

export { httpGetHash, httpGetTexto }