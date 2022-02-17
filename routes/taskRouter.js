const express = require('express');

const {
  createTaskController,
  getTaskController,
  updateTaskController,
} = require('../controllers/tasks');

const { createTaskValidator, updateTaskValidator } = require('../middlewares/reqValidator');

const router = express.Router();

router.post('/', createTaskValidator, createTaskController);
router.get('/', getTaskController);
router.put('/', updateTaskValidator, updateTaskController);

module.exports = router;