var User = require('../models/user.model')


module.exports.index = function (req, res) {

    User.find().then(function (users) {
        res.render('users/index', {
            users: users
        });
    })
};