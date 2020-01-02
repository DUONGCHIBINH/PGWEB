var mongoose = require('mongoose');

var evtSchema = new mongoose.Schema({

    thongtinchung: {
        ten: String,
        diadiem: String,
        mieutacv: String,
        ngaydienra: Date,
        ngaytao: Date,
        loai: String,
        congty: String,
        soluongtuyen: String,
        mucluong: String,
        yeucau: String,
    },
    nguoitao: Object,
    dsapply: [{
        pg: Object,
        duyet: String,
        thanhtoan: String,
    }],
    trangthai: String,
    type: String,
    mid: String,
    duyet: String,

});

var Event = mongoose.model('Event', evtSchema, 'Events')

module.exports = Event;