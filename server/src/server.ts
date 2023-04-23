import https from "https";
import fs from "fs";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

async function startServer() {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();