// const path = require('path');
const router = require('express').Router();


router.get('/dashboard');

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, ));
  });
module.exports = router;

