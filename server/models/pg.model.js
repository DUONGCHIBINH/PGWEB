var mongoose = require('mongoose');

var pg = new mongoose.Schema({

    mid: String,
    ten: String,
    loai: String,
    sosukien: String,
    soyeuthich: String,
    soluotmua: String,
    avatar: String,
    noilamviec: String,
    ngaysinh: Date,
    songtai: String,
    dentu: String,
    ngaythamgia: Date,
    Sukiendathamgia: String,
    album: String,
    thongtin: String

});

module.exports = mongoose.model('PG', pg, 'PG');