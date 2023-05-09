import axios from "axios";
const API_URL = "https://localhost:8000/v1/";

const encriptarRequest = async (texto: string) => {
    return await axios({
        method: 'get',
        url: `${API_URL}encriptar`,
        data: { texto },

    }).then((res) => {
        return res.data;
    });
};

const desencriptarRequest = async (hash: string) => {

    return await axios({
        method: 'get',
        url: `${API_URL}desencriptar`,
        data: { hash }
    }).then((res) => {
        return res.data;
    });
};

export { encriptarRequest, desencriptarRequest };
