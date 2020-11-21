const md5 = require('md5');

const db = require('../db');

module.exports.get_login = function (req, res) {
    res.render('login/login', {
        title: 'Login'
    });
}

module.exports.post_login = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var user = db.get('user').find({user: username}).value();
    if(!user) {
        res.render('login/login', {
            err: 'Username not exist'
        })
        return;
    }
    var hashMd5 = md5(password);
    if(user.password !== hashMd5) {
        res.render('login/login', {
            err: 'Wrong password'
        })
        return;
    }

    res.cookie("userID", user.id, {
        signed: true
    })
    res.redirect('/game');
}

