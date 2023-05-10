import https from "https";
import fs from "fs";
import path from "path"

import app from "./app.js";

const PORT = process.env.PORT || 8000;


// const server = https.createServer(
//     {
//         key: fs.readFileSync("../key.pem"),
//         cert: fs.readFileSync("../cert.pem"),
//     },
//     app
// );

async function startServer() {

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();