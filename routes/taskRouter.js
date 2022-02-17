const express = require('express');

const {
  createTaskController,
  getTaskController,
  updateTaskController,
  deleteTaskController
} = require('../controllers/tasks');

const { createTaskValidator,
  updateTaskValidator,
  deleteTaskValidator
} = require('../middlewares/reqValidator');

const router = express.Router();

router.post('/', createTaskValidator, createTaskController);
router.get('/', getTaskController);
router.put('/', updateTaskValidator, updateTaskController);
router.delete('/', deleteTaskValidator, deleteTaskController);

module.exports = router;