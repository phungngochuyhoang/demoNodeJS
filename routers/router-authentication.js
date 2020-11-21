const { Router } = require('express');


const controllers = require('../controllers/controller-authentication');

const router = Router();


router.get('/', controllers.get_login);

router.post('/', controllers.post_login);

module.exports = router;
