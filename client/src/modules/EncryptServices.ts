import axios from "axios";
const API_URL = "https://localhost:8000/v1/";

const encriptarRequest = async (texto: string) => {
    return await axios({
        method: 'post',
        url: `${API_URL}encriptar`,
        data: { texto },
        headers: {
            'Content-Type': 'application/json'
        }

    }).then((res) => {
        return res.data;
    });
};


const desencriptarRequest = async (hash: string) => {
    console.log('desencriptarRequest', hash)
    return await axios({
        method: 'post',
        url: `${API_URL}desencriptar`,
        data: { hash },
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        return res.data;
    });
};

export { encriptarRequest, desencriptarRequest };
