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
} = require('../utils');

//增加商品
router.post('/add', async (req, res) => {
    let {
        name
    } = req.body;
    try {
        insert('sortlist', {
            name
        });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

//获取全部商品
router.get('/', async (req, res) => {
    let {
        skip,
        limit,
        sort
    } = req.query;
    let data = await find('sortlist', {}, {
        skip,
        limit,
        sort
    });
    res.send(formatData({
        data
    }))
})

//单个
router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;
    let data = await find('sortlist', {
        _id: id
    });
    res.send(formatData({
        data
    }))
})


// 删除商品
router.delete('/:id', (req, res) => {
    let {
        id
    } = req.params;
    let data
    try {
        remove('sortlist', {
            _id: id
        })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

//修改商品
router.patch('/:id', (req, res) => {
    let {
        id,
    } = req.params;
    let {
        name
    } = req.body;

    try {
        if (name) {
            update('sortlist', {
                _id: id
            }, {
                $set: {
                    name: name
                }
            })
        }

        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})



module.exports = router;