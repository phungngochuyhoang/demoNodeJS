const { Router } = require('express');
const multer = require('multer');

var upload = multer({ dest: './public/uploads/' })


const controller = require('../controllers/controller-game');
const auth = require('../middleware/authentication');


const router = Router();

// game
router.get('/', controller.get_game) // document game

router.post('/api', controller.post_api)

router.get('/search', controller.get_gameSearch)

router.get('/infoGame/:id', controller.get_infoGame)


router.get('/add', controller.get_game_add) 
router.post('/add', upload.single('avatar'), controller.post_game_add) // post to database





module.exports= router;