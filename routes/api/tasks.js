const db = require('../../models');
const router = require('express').Router();
const tasksController = require('../../controllers/tasksController');

router.get('/', tasksController.findAll);
router.post('/', tasksController.create);
router.delete('/:id', tasksController.remove);
router.put('/:id', tasksController.update);

module.exports = router;

