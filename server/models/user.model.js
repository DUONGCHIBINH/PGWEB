var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
userid:{type:String, trim:true},
username:{type:String, trim:true},
type:String
});


module.exports = mongoose.model('User',userSchema,'Users');