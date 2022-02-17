const { Task } = require('../../models');

module.exports = async (name, description, status) => {
  try {
    const taskCreated = await Task.create({ name, description, status });
    return { status: 201, message: taskCreated }
  } catch (error) {
    return { status: 400, message: 'an error occurred at server' }
  }
};