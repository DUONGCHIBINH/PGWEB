const express = require('express');
const router = express.Router();

var User = require('../../models/event.model')



//REMOVE by id   /api/user/remove/?id=5da89ed01c9d440000a149fa
router.get('/remove', async(req, res) => {
    const query = req.query;
    const id = query.id;

    User.findByIdAndRemove(id)
        .then(user => {
            res.json({
                confirmation: 'success',
                data: 'User ' + id + ' successfully remove'
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'User ' + id + ' not found'
            })
        })
});



//UPDATE by id 
router.post('/update/:id', async(req, res) => {
    const body = req.body;
    const id = req.params.id
    User.findByIdAndUpdate(id, body, { new: true })
        .then(user => {
            res.json({
                confirmation: 'update success',
                data: user
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'User ' + id + ' not found'
            })
        })
});


//Get GET     find: api/user?username=Binh  
router.get('/', async(req, res) => {
    const query = req.query
    User.find(query)
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
    const id = req.params.id

    User.findById(id)
        .then(user => {
            res.json({
                confirmation: 'success',
                data: user
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'User ' + id + ' not found'
            })
        })
});

//POST ADD
router.post('/', async(req, res) => {
    User.create(req.body)
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