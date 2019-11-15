var mongoose = require('mongoose');

var evtSchema = new mongoose.Schema({

    type: String,
    mid: String,
    ten: String,
    diadiem: String,
    mieutacv: String,
    ngaydienra: Date,
    ngaytao: Date,
    loai: String,
    congty: String,
    soluongtuyen: String,
    trangthai: String,
    mucluong: String,
    duyet: String
});

var Event = mongoose.model('Event', evtSchema, 'Events')

module.exports = Event;