const express = require('express');

const router = express.Router();

const {
    insert,
    find
} = require('../db/mongo');
const {
    formatData,
    token
} = require('../utils')

// 注册用户
router.post('/reg', async (req, res) => {
    let {
        username,
        password,
    } = req.body;

    try {
        insert('user', {
            username,
            password,
        });
        res.send(formatData({
            data: {
                username: username

            }
        }))
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

// 检查用户名是否存在
router.post('/check', async (req, res) => {
    let {
        username
    } = req.body;
    let data
    try {
        data = await find('user', {
            username
        });
        data = data[0];
        if (data) {
            res.send(formatData({
                code: 0
            }))
        } else {
            res.send(formatData())
        }
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

//登录
router.post('/login', async (req, res) => {
    let {
        username,
        password
    } = req.body;
    let data
    try {
        data = await find('user', {
            username,
            password
        });
        //  console.log(data);
        data = data[0];

        // 生成token返回前端
        let authorization = token.create(username);
        if (data) {
            res.send(formatData({
                data: {
                    _id: data._id,
                    username: data.username,
                    authorization
                }
            }))
        } else {
            res.send(formatData({
                code: 0
            }))
        }
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})


module.exports = router;