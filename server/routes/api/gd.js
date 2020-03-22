const express = require('express');
const router = express.Router();

var GD = require('../../models/gd.model')

var PG = require('../../models/pg.model')


//Get GET     find: api/gd?username=Binh  
router.get('/', async(req, res) => {
    const query = req.query

    GD
    .find(query)
        .then(gd => {
            res.json({
                confirmation: 'success',
                data: gd
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
});
//GET by id   /api/gd/5da89ed01c9d440000a149fa
router.get('/:id', async(req, res) => {
    const id = req.params.id

    ;(await GD.findById(id))
        .then(gd => {
            res.json({
                confirmation: 'success',
                data: gd
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'GD ' + id + ' not found'
            })
        })
});
//UPDATE by id 
router.post('/update/:id', async (req, res) => {
    const body = req.body;
    const id = req.params.id
    console.log(id)
    GD.findByIdAndUpdate(id, body, { new: true })
        .then(ap => {
            res.json({
                confirmation: 'update success',
                data: ap
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'GD ' + id + ' not found'
            })
        })
});

//UPDATE many  User.update({"created": false}, {"$set":{"created": true}}, {"multi": true}, (err, writeResult) => {});
//UPDATE by id 
router.post('/updatemany/:id', async (req, res) => {
    const query = req.query
    const body = req.body;
    const id = req.params.id
    console.log(id)
    GD.update({"obmomo.orderId": id}, {"$set":{"thanhcong": true , "trangthai":"Thành công" , "magiaodich": query.magiaodich}   }, {"multi": true}, (err, writeResult) => {     })
        .then(ap => {
            res.json({
                confirmation: 'update success',
                data: ap
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'GD ' + id + ' not found'
            })
        })
});

//POST ADD
router.post('/', async(req, res) => {
    GD.create(req.body)
        .then(gd => {
            console.log(gd);
            res.json({
                confirmation: 'add success',
                data: gd
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })

});

module.exports = router;