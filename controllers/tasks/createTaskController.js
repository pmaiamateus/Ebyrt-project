const { createTaskService } = require('../../services/tasks');

module.exports = async (req, res, next) => {
  try {
    const { name, description, status } = req.body;
    const serviceResponse = await createTaskService(name, description, status);
    return res.status(serviceResponse.status).json(serviceResponse.message);
  } catch (error) {
    next(error);
  }
};