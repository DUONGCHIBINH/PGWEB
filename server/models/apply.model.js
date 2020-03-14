var mongoose = require('mongoose');



var applySchema = new mongoose.Schema({
    
    eventid: { type: String, trim: true },
    pgid: { type: String, trim: true },
    ngayapply: Date,
    obPG: Object,
    obSukien: Object,
    duyet:Boolean,
    mua:Boolean,


});


module.exports = mongoose.model('apply', applySchema, 'Apply');