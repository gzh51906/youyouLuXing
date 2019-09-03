<<<<<<< HEAD
const express = require('express');

const app = express();

const {PORT} = require('./config.json');

const router = require('./router');

app.use(express.static('./'));

app.use(router);

app.listen(PORT,()=>{
    console.log(PORT+'服务器启动');
    
})

=======
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
>>>>>>> laochen
