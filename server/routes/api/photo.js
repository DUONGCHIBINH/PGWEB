const express = require('express');
const router = express.Router();
var path = require('path');
var formidable = require('formidable');
const fs = require('fs')


const dir = 'server/photos/';


router.get('/sys/:id', async (req, res) => {

    const dirsys = 'server/photos/system/';
    var id = req.params.id
    if (fs.existsSync(path.resolve(dirsys + id))) {

        res.sendFile(path.resolve(dirsys + id));
    }
    else res.send('FILE SYS NOT FOUND!' );
    // res.sendFile(path.resolve(dir+id));
    // res.sendFile('index.html', { root: __dirname }); __dirname là thư mục chứa file đang thực thi

});
router.get('/:id', async (req, res) => {

    var id = req.params.id
    if (fs.existsSync(path.resolve(dir + id))) {

        res.sendFile(path.resolve(dir + id));
    }
    else res.send('FILE NOT FOUND!');
    // res.sendFile(path.resolve(dir+id));
    // res.sendFile('index.html', { root: __dirname }); __dirname là thư mục chứa file đang thực thi

});



router.get('/', async (req, res) => {

    res.send('Not Found!');
 
    // res.sendFile(path.resolve(dir+id));
    // res.sendFile('index.html', { root: __dirname }); __dirname là thư mục chứa file đang thực thi

});


router.post('/', async (req, res)=>{
    var form = new formidable.IncomingForm();

    form.parse(req);
   
    form.on('fileBegin', function (name, file){
        file.path = path.resolve(dir + file.name)  ;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
       
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            "status": "success",
            "link": "http://localhost:5000/api/photo/"+file.name,
        }
        ));

    });
  
   
});


router.post('/:id', async (req, res)=>{
    var form = new formidable.IncomingForm();

    var id = req.params.id
    form.parse(req);
   
    form.on('fileBegin', function (name, file){
        file.path = path.resolve(dir + id)  ;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + id);
       
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            "status": "success",
            "link": "http://localhost:5000/api/photo/"+id,
        }
        ));

    });
  
   
});



module.exports = router;