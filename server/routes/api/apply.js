const express = require('express');
const router = express.Router();

var Apply = require('../../models/apply.model')



//Get GET     find: api/apply?username=Binh  
router.get('/', async(req, res) => {
    const query = req.query
    Apply
    .find(query)
        .then(apply => {
            res.json({
                confirmation: 'success',
                data: apply
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
        })
});
//GET by id   /api/apply/5da89ed01c9d440000a149fa
router.get('/:id', async(req, res) => {
    const id = req.params.id

    ;(await Apply.findById(id))
        .then(apply => {
            res.json({
                confirmation: 'success',
                data: apply
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'Apply ' + id + ' not found'
            })
        })
});
//UPDATE by id 
router.post('/update/:id', async (req, res) => {
    const body = req.body;
    const id = req.params.id
    console.log(id)
    Apply.findByIdAndUpdate(id, body, { new: true })
        .then(ap => {
            res.json({
                confirmation: 'update success',
                data: ap
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: 'Apply ' + id + ' not found'
            })
        })
});

//POST ADD
router.post('/', async(req, res) => {
    Apply.create(req.body)
        .then(apply => {
            console.log(apply);
            res.json({
                confirmation: 'add success',
                data: apply
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