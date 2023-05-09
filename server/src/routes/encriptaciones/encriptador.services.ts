import CryptoJS from "crypto-js"

const KEY = "2e35f242a46d67eeb74aabc37d5e5d05";

function encriptar(texto: string): string {

    let hash = CryptoJS.AES.encrypt(texto, KEY).toString();
    const ciphertext = "U2FsdGVkX1+2Wg1WSCB5eRl523yhL+0F9s6RbENly5c=";
    const bytes = CryptoJS.AES.decrypt(hash, KEY);
    console.log(bytes.toString(CryptoJS.enc.Utf8))
    return hash
}

function desencriptar(hash: string): string {
    // return new Promise((resolve, reject) => {

    console.log('aa', hash)

    let bytes = CryptoJS.AES.decrypt(hash, KEY);
    let texto = bytes.toString(CryptoJS.enc.Utf8) as string;


    return texto
}

export { encriptar, desencriptar }

