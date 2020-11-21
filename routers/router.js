const { Router } = require('express');
const bodyParser = require('body-parser');


const controller = require('../controllers/controller');


const router = Router();
const urlencodedBodyParser = bodyParser.urlencoded({extended: false});

// game
router.get('/game', controller.get_game)

router.get('/game/add', controller.get_game_add)

router.get('/game/search', controller.get_gameSearch)

router.post('/game/add', urlencodedBodyParser, controller.post_game_add)

// music 
router.get('/music', controller.get_music)


module.exports = router;