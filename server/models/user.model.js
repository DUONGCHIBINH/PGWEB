var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userid: { type: String, trim: true },
    username: { type: String, trim: true },
    email: { type: String, trim: true },
    hoten: { type: String, trim: true },
    sdt: { type: String, trim: true },
    gioitinh: { type: String, trim: true },
    type: { type: String, trim: true },

});


module.exports = mongoose.model('User', userSchema, 'Users');