const express = require("express");
const bodyParser =  require("body-parser");
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

mongoose.connect('mongodb://localhost:27017/WEBDB',{
         useNewUrlParser: true,
         useUnifiedTopology: true
     });


const app = express();

//middleware

app.use(bodyParser.urlencoded({ //nhan body cua form submit
    extended: true
}));

app.use(bodyParser.json());  //chi nhan body json
app.use(cors());

//dieu huong
const posts = require('./routes/api/posts');
app.use('/api/posts',posts);

const user = require('./routes/api/users');
app.use('/api/user',user);


app.get('/',function (req,res){
    res.send("WELCOM TO PG_Web API");
})




const port = process.env.port || 5000;

app.listen(port,() => console.log('Server started on port '+ port ));

