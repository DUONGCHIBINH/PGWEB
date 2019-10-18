var mongoose = require('mongoose');

var evtSchema = new mongoose.Schema({
evtid:String,
evtname:String,
type:String
});

var Event = mongoose.model('Event',userSchema,'Events')

module.exports = Event;