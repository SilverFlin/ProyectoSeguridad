import axios from "axios";
const API_URL = "https://caliz.jorgeluissanchezquezada.click/v1/";

const currentSessionRequest = async () => {
    return await axios({
        method: 'get',
        url: `${API_URL}user/current`,

    }).then((res) => {
        return res.data;
    });
};

export { currentSessionRequest }