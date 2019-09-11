const express = require("express");
const router = require("./router");
const {
    PORT
} = require("./config.json");

const app = express();

app.use(express.static("./"));

app.use(router);

app.listen(PORT, () => {
    console.log("服务器已开启，端口号为" + PORT);
    
})
