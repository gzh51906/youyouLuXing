const mongodb = require('mongodb');

const {DBurl,DBname} = require('../config.json');;

// 获取Mongo客户端
const {MongoClient,ObjectId} = mongodb;

//连接mongoDB
const connect =()=>{
    return new Promise((resolve,reject)=>{
        MongoClient.connect(DBurl, async (err, client)=>{
            // err:连接失败时的错误信息，默认为null
            // client：连接数据库的客户端
            if(err) throw err;
        
            // 连接具体一个数据库，无则自动创建
            let db = client.db(DBname);
        
            resolve({client,db});
         });
    })
}

//增


//删


//改


//查

