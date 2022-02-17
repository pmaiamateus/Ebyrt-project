const { updateTaskService } = require('../../services/tasks');

module.exports = async (req, res, next) => {
  try {
    const { id, name, description, status } = req.body;
    const serviceResponse = await updateTaskService(id, name, description, status);
    return res.status(serviceResponse.status).json(serviceResponse.message);
  } catch (error) {
    next(error);
  }
};