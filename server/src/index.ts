import express, { Request, Response } from "express"
import * as encriptador from "./encriptador";

const PORT = 3000



const app = express();


app.get("/encriptar/:texto", async (req: Request, res: Response) => {
    const textoEncriptar = req.params.texto;

    await encriptador.encriptar(textoEncriptar)
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


})

app.get("/desencriptar/:hash", async (req: Request, res: Response) => {
    const hash = req.params.hash;
    res.json({
        data: {
            texto: await encriptador.desencriptar(hash)
        },
        status: 200
    })
})





app.get("/", (req: Request, res: Response) => {
})












app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`)
})