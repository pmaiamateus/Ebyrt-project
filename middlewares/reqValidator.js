const Joi = require('joi');

const createTaskSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
});

const createTaskValidator = (req, res, next) => {
  const { name, description, status } = req.body;
  const { error } = createTaskSchema.validate({ name, description, status });
  if (error) return res.status(400).json({ message: error.details[0].message });
  if (!(status in { 'em andamento': '', 'pronto': '', 'pendente': ''})) {
    return res.status(400).json({ message: 'status type not supported' });
  }
  next();
};

const updateTaskSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
});

const updateTaskValidator = (req, res, next) => {
  const { id, name, description, status } = req.body;
  const { error } = updateTaskSchema.validate({ id, name, description, status });
  if (error) return res.status(400).json({ message: error.details[0].message });
  if (!(status in { 'em andamento': '', 'pronto': '', 'pendente': ''})) {
    return res.status(400).json({ message: 'status type not supported' });
  }
  next();
};

module.exports = { createTaskValidator, updateTaskValidator };