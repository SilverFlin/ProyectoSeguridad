import CryptoJS from "crypto-js"

const KEY = "2e35f242a46d67eeb74aabc37d5e5d05";

function encriptar(texto: string): string {

    let hash = CryptoJS.AES.encrypt(texto, KEY).toString();
    const ciphertext = "U2FsdGVkX1+2Wg1WSCB5eRl523yhL+0F9s6RbENly5c=";
    const bytes = CryptoJS.AES.decrypt(hash, KEY);
    return hash
}

function desencriptar(hash: string): string {
    // return new Promise((resolve, reject) => {
    console.log('desencriptar', hash)
    const realKey = CryptoJS.enc.Utf8.parse(KEY);
    const iv = CryptoJS.enc.Utf8.parse('123');
    const caliz = CryptoJS.AES.encrypt(hash, realKey, { iv: iv });
    return caliz.toString();

}

export { encriptar, desencriptar }

