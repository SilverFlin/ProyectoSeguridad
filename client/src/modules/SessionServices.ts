import axios from "axios";
const API_URL = "https://caliz.jorgeluissanchezquezada.click/";

const currentSessionRequest = async () => {
    return await axios({
        method: 'get',
        url: `${API_URL}user/current`,

    }).then((res) => {
        return res.data;
    });
};

export { currentSessionRequest }