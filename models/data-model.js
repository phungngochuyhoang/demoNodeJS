var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    name: String,
    avatar: String,
    date: {type: Date, default: Date.now}
})

var Data = mongoose.model('user', dataSchema, 'data');


module.exports = Data;