

// TODO implementar encriptador
async function encriptar(texto: string): Promise<string> {


    const rand = Math.random() * 4000
    console.log(rand)
    await new Promise(resolve => setTimeout(resolve, rand));

    return "hash"
}
// TODO implementar desencriptador
async function desencriptar(hash: string): Promise<string> {
    const rand = Math.random() * 4000
    console.log(rand)
    await new Promise(resolve => setTimeout(resolve, rand));

    return "texto"
}

export {
    encriptar, desencriptar
}