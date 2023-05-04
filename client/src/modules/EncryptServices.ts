import axios from "axios";
const API_URL = "https://localhost:8000/v1/";

const encriptar = async (texto: string) => {
    return await axios.get(`${API_URL}encriptar/${texto}`)
        .then((res) => {
            console.log(res);
            return res.data;
        });
};

const desencriptar = async (hash: string) => {
    await axios.get(`${API_URL}desencriptar/${hash}`)
        .then((res) => {
            console.log(res);
            return res.data;
        });
};

export { encriptar, desencriptar };
