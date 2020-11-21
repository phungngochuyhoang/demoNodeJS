const { Router } = require('express');


const router = Router();

router.get('/', function(req, res) {
    res.send("test git");
})

module.exports = router;