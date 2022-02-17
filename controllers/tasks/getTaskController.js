const { getTaskService } = require('../../services/tasks');

module.exports = async (_req, res, next) => {
  const serviceResponse = await getTaskService();
  return res.status(serviceResponse.status).json(serviceResponse.message);
};