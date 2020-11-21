const shortId = require('shortid');

const db = require('../db');

module.exports.session = function (req, res, next) {
    if(!req.signedCookies.sessionId) {
        var sessionID = shortId.generate();
        res.cookie('sessionId', sessionID, {
            signed: true    
        })
        db.get('session').push({
            id: sessionID
        }).write();
    }


    next()
}