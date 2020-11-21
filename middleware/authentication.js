const db = require('../db');

module.exports.authentication = function(req, res, next) {
    if(!req.signedCookies.userID) {
        res.redirect('/login');
        return;
    }

    var userCookie = db.get('user').find({id: req.signedCookies.userID}).value()
    if(!userCookie) {
        res.redirect('/login');
        return;
    }
    
    next();
}