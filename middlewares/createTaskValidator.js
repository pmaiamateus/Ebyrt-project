const Joi = require('joi');

const createTaskSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
});

module.exports = (req, res, next) => {
  const { name, description, status } = req.body;
  const { error } = createTaskSchema.validate({ name, description, status });
  if (error) return res.status(400).json({ message: error.details[0].message });
  if (!(status in { 'em andamento': '', 'pronto': '', 'pendente': ''})) {
    return res.status(400).json({ message: 'status type not supported' });
  }
  next();
};