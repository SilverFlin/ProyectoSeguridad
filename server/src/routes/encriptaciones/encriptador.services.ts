import CryptoJS from "crypto-js"

const KEY = "2e35f242a46d67eeb74aabc37d5e5d05";

function encriptar(texto: string): string {
    const encryptedData = CryptoJS.AES.encrypt(texto, KEY).toString();
    return encryptedData;
}

function desencriptar(hash: string): string {
    const decryptedData = CryptoJS.AES.decrypt(hash, KEY).toString(CryptoJS.enc.Utf8);
    return decryptedData;
}

export { encriptar, desencriptar }

