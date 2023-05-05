import axios from "axios";
const API_URL = "https://localhost:8000/v1/";

const encriptarRequest = async (texto: string) => {
    return await axios.get(`${API_URL}encriptar/${texto}`)
        .then((res) => {
            return res.data;
        });
};

const desencriptarRequest = async (hash: string) => {
    await axios.get(`${API_URL}desencriptar/${hash}`)
        .then((res) => {
            return res.data;
        });
};

export { encriptarRequest, desencriptarRequest };
