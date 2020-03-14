const express = require('express');
const router = express.Router();

var NTD = require('../../models/ntd.model')



//REMOVE by id   /api/user/remove/?id=5da89ed01c9d440000a149fa
router.get('/remove', async(req, res) => {
    const query = req.query;
    const id = query.id;

    NTD.findByIdAndRemove(id)
        .then(user => {
            res.json({
                confirmation: 'success',
                data: 'NTD ' + id + ' successfully remove'
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'NTD ' + id + ' not found'
            })
        })
});

//UPDATE by id   /api/user/update?id=5da89ed01c9d440000a149fa&type=admin&userid=0
router.get('/update', async(req, res) => {
    const query = req.query;
    const id = query.id;


    NTD.findByIdAndUpdate(id, query, { new: true })
        .then(user => {
            res.json({
                confirmation: 'success',
                data: user
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'NTD ' + id + ' not found'
            })
        })
});

//UPDATE by id   /api/user/update?id=5da89ed01c9d440000a149fa&type=admin&userid=0
router.post('/update', async(req, res) => {
    const body = req.body;
    const id = body.id;
    NTD.findByIdAndUpdate(id, body, { new: true })
        .then(user => {
            res.json({
                confirmation: 'success',
                data: user
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'NTD ' + id + ' not found'
            })
        })
});

//UPDATE by id 
router.post('/update/:id', async(req, res) => {
    const body = req.body;
    const id = req.params.id
    NTD.findByIdAndUpdate(id, body, { new: true })
        .then(user => {
            res.json({
                confirmation: 'success',
                data: user
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'NTD ' + id + ' not found'
            })
        })
});


//Get GET     find: api/user?username=Binh  
router.get('/', async(req, res) => {
    const query = req.query
    NTD.find(query)
        .then(user => {
            res.json({
                confirmation: 'success',
                data: user
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
});
//GET by id   /api/user/5da89ed01c9d440000a149fa
router.get('/:id', async(req, res) => {
    const id = req.params.id;

    NTD.findById(id)
        .then(user => {
            res.json({
                confirmation: 'success',
                data: user
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'NTD ' + id + ' not found'
            })
        })
});

//POST ADD
router.post('/', async(req, res) => {
    NTD.create(req.body)
        .then(user => {
            console.log(user);
            res.json({
                confirmation: 'add success',
                data: user
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