var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    user: String,
    password: String
})

var User = mongoose.model('user', userSchema, 'users');


module.exports = User;