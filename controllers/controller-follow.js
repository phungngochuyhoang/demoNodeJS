
const db = require("../db");

module.exports.get_followAdd = function (req, res, next) {
    var followID = req.params.id;
    var sessionID = req.signedCookies.sessionId;

    if(!sessionID) {
        res.redirect('/game');
        return;    
    }

    var count = db
        .get('session')
        .find({id: sessionID})
        .get('follow.' + followID, 1)
        .value();


    db.get('session')
        .find({id: sessionID})
        .set('follow.' + followID, count + 1)
        .write()

    res.redirect('/game')
}

