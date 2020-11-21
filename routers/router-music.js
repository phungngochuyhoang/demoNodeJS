const { Router } = require('express');


const controller = require('../controllers/controller-music');
const { route } = require('./router-game');


const router = Router();


router.get('/', controller.get_music);



module.exports = router;