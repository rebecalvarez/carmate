const router = require('express').Router();
const serviceRoutes = require('./service');
const tasksRoutes = require('./tasks');

// Book routes
router.use('/service', serviceRoutes);
router.use('/tasks', tasksRoutes);

module.exports = router;
