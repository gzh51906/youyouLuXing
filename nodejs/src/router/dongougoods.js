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

//增加商品
router.post('/add', async (req, res) => {
    let {
        title,
        src,
        sales,
        price,
        attr,
        attr1,
        attr2
    } = req.body;
    let data
    try {
        insert('dongoudata', {
            title,
            src,
            sales,
            price,
            attr,
            attr1,
            attr2
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
    let data = await find('dongoudata', {}, {
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
    let data = await find('dongoudata', {
        _id: id
    });
    res.send(formatData({
        data
    }))
})

//hot
router.post('/attr', async (req, res) => {
    let {
        attr
    } = req.body;
    let data;
    if (attr) {
        data = await find('dongoudata', {
            attr: attr
        });
    }
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
        remove('dongoudata', {
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
        price,
        title,
        src,
        attr
    } = req.body;

    try {
        if (title) {
            update('dongoudata', {
                _id: id
            }, {
                $set: {
                    title: title
                }
            })
        }
        if (price) {
            update('dongoudata', {
                _id: id
            }, {
                $set: {
                    price: price
                }
            })
        }
        if (src) {
            update('dongoudata', {
                _id: id
            }, {
                $set: {
                    src: src
                }
            })
        }
        if (attr) {
            update('dongoudata', {
                _id: id
            }, {
                $set: {
                    attr: attr
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