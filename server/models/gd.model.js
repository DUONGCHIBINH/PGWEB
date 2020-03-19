var mongoose = require('mongoose');



var gdSchema = new mongoose.Schema({
    
    applyid: { type: String, trim: true },
    pgid: { type: String, trim: true },
    eventID: Date,
    obPG: Object,
    nguoitao:String,
    trangthai:String,
    thanhcong:Boolean,
    ngaytao:Date,
    sotien:Number,
});


module.exports = mongoose.model('GD', gdSchema, 'GD');