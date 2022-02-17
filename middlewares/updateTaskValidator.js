const Joi = require('joi');

const updateTaskSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
});

module.exports = (req, res, next) => {
  const { id, name, description, status } = req.body;
  const { error } = updateTaskSchema.validate({ id, name, description, status });
  if (error) return res.status(400).json({ message: error.details[0].message });
  if (!(status in { 'em andamento': '', 'pronto': '', 'pendente': ''})) {
    return res.status(400).json({ message: 'status type not supported' });
  }
  next();
};