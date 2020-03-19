var mongoose = require('mongoose');

var evtSchema = new mongoose.Schema({

   
       tensukien: String,
      tencongty: String,
      diadiem: String,
      email: String,
      soluongtuyen: String,
      mucluong: String,
      doituong: [],
      ngaybatdau: Date,
      ngayketthuc: Date,
      thoigianbatdau: String,
      thoigianketthuc: String,
      mota: String,
      yeucau: String,
      trangthai:String,
      duyet: Boolean,
      huy: Boolean,
      nguoitao:String,
      ngaytao: Date,
      SLxem: Number,
      SLungtuyen: Number,

    

});

var Event = mongoose.model('Event', evtSchema, 'Events')

module.exports = Event;