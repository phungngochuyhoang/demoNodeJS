const shortId = require('shortid');


const db = require('../db');

// game
module.exports.get_game = function(req, res) {
    res.render('game/document-game', {
        title: 'Document Game',
        data: db.get('data').write()
    })
}

module.exports.get_game_add = function(req, res) {
    res.render('game/add', {
        title: 'Add Game'
    })
}

module.exports.get_gameSearch = function(req, res) {
    var name = req.query.name;
    var filterData = db.get('data').filter(function(item) {
        return item.name.indexOf(name) !== -1 || item.name.toLocaleLowerCase().indexOf(name) !== -1 || item.name.toUpperCase().indexOf(name) !== -1;
    }).value();
    
    res.render('game/document-game', {
        title: 'Document Game',
        data: filterData
    })
}

module.exports.post_game_add = function(req, res) {
    var id = shortId.generate();
    var data = Object.assign({id}, req.body);
    db.get('data').push(data).write()
    res.redirect('/game');
}

// music
module.exports.get_music = function(req, res) {
    res.render('music/document-music', {
        title: 'Music'
    })
}