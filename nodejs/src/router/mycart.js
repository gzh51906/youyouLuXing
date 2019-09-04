const express = require('express');

const router = express.Router();

const {
    insert,
    remove,
    find,
    update
} = require('../db/mongo');
const {
    formatData,
    token
} = require('../utils');

//增加订单
router.post('/add', async (req, res) => {
    let {
        title,
        src,
        price,
        num,
        status
    } = req.body;
    try {
        let total = (price.slice(1)) * num
        // console.log(total);
        if (!status) {
            status = "0";
        }
        insert('mycart', {
            title,
            src,
            price,
            num,
            status,
            total
        });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

//获取全部订单
router.get('/', async (req, res) => {
    let {
        skip,
        limit,
        sort
    } = req.query;
    let data = await find('mycart', {}, {
        skip,
        limit,
        sort
    });
    res.send(formatData({
        data
    }))
})

//获取各小项的订单  status：   1==未付款  2==代销费 3==待点评 4==退款
router.post('/status', async (req, res) => {
    let {
        status
    } = req.body;
    let data = await find('mycart', {
        status: status
    });
    res.send(formatData({
        data
    }))
})


// 删除订单
router.delete('/:id', (req, res) => {
    let {
        id
    } = req.params;

    try {
        remove('mycart', {
            _id: id
        })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

//修改订单状态   ：就是修改status的对应状态
router.patch('/:id', (req, res) => {
    let {
        id,
    } = req.params;
    let {
       status
    } = req.body;

    try {
     
            update('mycart', {
                _id: id
            }, {
                $set: {
                    status: status
                }
            })
        
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})



module.exports = router;