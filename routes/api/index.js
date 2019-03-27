const router = require('express').Router();
const carRoutes = require('./car');

// Book routes
router.use('/car', carRoutes);

module.exports = router;
