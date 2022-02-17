const Joi = require('joi');

const deleteTaskSchema = Joi.object({
  id: Joi.number().required(),
});

module.exports = (req, res, next) => {
  const { id } = req.body;
  const { error } = deleteTaskSchema.validate({ id });
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};