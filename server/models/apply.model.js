var mongoose = require('mongoose');



var applySchema = new mongoose.Schema({
    applyid: { type: String, trim: true },
    eventid: { type: String, trim: true },
    list_apply: [Object],

});


module.exports = mongoose.model('apply', applySchema, 'Apply');