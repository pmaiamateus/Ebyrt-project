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
  next();
};

module.exports = { createTaskValidator };