const { deleteTaskService } = require('../../services/tasks');

module.exports = async (req, res, next) => {
  const { id } = req.body;
  const serviceResponse = await deleteTaskService(id);
  return res.status(serviceResponse.status).json(serviceResponse.message);
};