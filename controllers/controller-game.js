
const shortId = require('shortid');


const db = require('../db');

// game
module.exports.get_game = function(req, res) {
    var page = parseInt(req.query.page) || 1;
    var item = 8;
    var start = (page - 1) * item;
    var end = (page - 1) * item + item;
    var data = db.get('data').write();
   
    console.log(db.get('data').value());

    res.render('game/document-game', {
        title: 'Document Game',
        data: data.slice(start, end),
        pagination: db.get('data').value(),
        item: item,
        
    })
}

module.exports.post_api = function(req, res) {
    res.json(db.get('data').value())
}

module.exports.get_game_add = function(req, res) {
    res.render('game/add', {
        title: 'Add Game'
    })
}

module.exports.get_gameSearch = function(req, res) {
    var name = req.query.name;
    var findData = db.get('data').filter(function(item) {
        return item.name.indexOf(name) !== -1 || item.name.toLocaleLowerCase().indexOf(name) !== -1 || item.name.toUpperCase().indexOf(name) !== -1;
    }).value();
    
    res.render('game/document-game', {
        title: 'Document Game',
        data: findData
    })
}

module.exports.post_game_add = function(req, res) {
    var id = shortId.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('\\');
    var data = Object.assign({id}, req.body);
    db.get('data').push(data).write()
    res.redirect('/game');
}

module.exports.get_infoGame = function(req, res) {
    var id = req.params.id;
    var filterData = db.get('data').find({id: id}).value();
    var session = db.get('session').find({id: req.signedCookies.sessionId}).value();
    var keyFollow;
    for(let key in session.follow) {
        if(id === key) {
            keyFollow = session.follow[key];
            name = key;
        }
    }


    res.render('game/info-game', {
        data: filterData,
        key: keyFollow
    });
}
