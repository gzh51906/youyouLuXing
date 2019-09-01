const express = require('express');

const Router = express.Router();

// 引入路由文件
const goodsRouter = require('./goods');
const userRouter = require('./user');

// 利用中间bodyParse格式化请求参数
Router.use(express.json(),express.urlencoded({extended:false}))

Router.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.method=="OPTIONS") {// 在预请求中告诉浏览器这里允许跨域，让她发真实的请求过来吧
        res.sendStatus(200);
        // 等效于：res.status(200).send()
    }else{
        next();
    }
})

Router.use('/goods',goodsRouter);
Router.use('/user',userRouter);



module.exports=Router;