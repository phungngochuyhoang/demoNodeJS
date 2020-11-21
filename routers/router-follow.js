const { Router } = require('express');

const controllers = require('../controllers/controller-follow');

const router = Router();

router.get('/:id', controllers.get_followAdd);

module.exports = router;