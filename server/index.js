const express = require("express");


const bodyParser = require("body-parser");
const cors = require("cors");
var mongoose = require('mongoose');

require('dotenv').config();


//cloud
// mongoose.connect('mongodb+srv://'+process.env.MONGO_USER+':'+process.env.MONGO_PASS+'@PGWEBDB-nk8tp.azure.mongodb.net/PGWEB?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false,
//     useCreateIndex:true,
// });

//local '+process.env.MONGO_USERS+' '+process.env.MONGO_PASS+'

mongoose.connect('mongodb://localhost:27017/WEBDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const app = express();
//middleware

app.use(bodyParser.urlencoded({ //nhan body cua form submit
    extended: true
}));

app.use(bodyParser.json()); //chi nhan body json
app.use(cors());

//dieu huong
const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

const user = require('./routes/api/users');
app.use('/api/user', user);

const event = require('./routes/api/event');
app.use('/api/event', event);

const pg = require('./routes/api/pg');
app.use('/api/pg', pg);

const apply = require('./routes/api/apply');
app.use('/api/apply', apply);

const momo = require('./routes/api/momo');
app.use('/api/momo', momo);


var CryptoJS = require("crypto-js");

app.get('/momo', function(req, res) {
    var mess = 'partnerCode=MOMOAOBT20191229&accessKey=QIomPPOMzVHXcXMY&requestId=test01&amount=99999&orderId=test01&orderInfo=testinfo&returnUrl=https://momo.vn&notifyUrl=https://momo.vn&extraData=name=binh'
    var key = '7OFeEEMd6JZj7xIXndDQw41zie2em3gZ'
    res.send(CryptoJS.HmacSHA256(mess, key).toString());
})

app.get('/', function(req, res) {
    // res.send("WELCOM TO PG_Web API");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify([{
        "text": "MaKH",
        "value": "MaKH"
    }, {
        "text": "ID",
        "value": "ID"
    }, {
        "text": "Key",
        "value": "MaKH"
    }]));
})


var server = require('http').Server(app);
var io = require('socket.io')(server);
var online = 0;
const port = process.env.port || 5000;

server.listen(port, () => console.log('Server started on port ' + port));
// app.listen(port, () => console.log('Server started on port ' + port));
//socket.io
io.on('connection', function(socket) {
    online++;
    console.log("Tổng lượt kết nối: " + online);
    socket.on('disconnect', function(socket) {
        online--;
        console.log("Tổng lượt kết nối: " + online);
    });

    io.emit("online", online);
});