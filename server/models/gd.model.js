var mongoose = require('mongoose');



var gdSchema = new mongoose.Schema({
    
    applyid: { type: String, trim: true },
    obapply:Object,
    nguoitao:String,
    trangthai:String,
    thanhcong:Boolean,
    ngaytao:Date,
    sotien:Number,
    obmomo:{ type: Object, trim: true },
   
});


module.exports = mongoose.model('GD', gdSchema, 'GD');