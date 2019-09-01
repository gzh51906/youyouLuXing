const express = require('express');

const app = express();

const {PORT} = require('./config.json');

const router = require('./router');

app.use(express.static('./'));

app.use(router);

app.listen(PORT,()=>{
    console.log(PORT+'服务器启动');
    
})

