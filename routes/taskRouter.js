const express = require('express');

const { createTaskController } = require('../controllers/tasks');

const { createTaskValidator } = require('../middlewares/reqValidator')

const router = express.Router();

router.post('/', createTaskValidator, createTaskController);

module.exports = router;