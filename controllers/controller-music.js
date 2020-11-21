

const db = require('../db');

// music
module.exports.get_music = function(req, res) {

    
    res.render('music/document-music', {
        title: 'Music'
    })
}