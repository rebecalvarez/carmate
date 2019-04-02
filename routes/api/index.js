const router = require('express').Router();
const serviceRoutes = require('./service');


// Book routes
router.use('/service', serviceRoutes);


module.exports = router;
