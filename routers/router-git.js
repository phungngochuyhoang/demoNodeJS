const { Router } = require('express');

const controllers = require('../controllers/controller-git');

const router = Router();

router.get('/', controllers.get_git)

module.exports = router;