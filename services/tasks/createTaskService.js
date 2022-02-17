const { Task } = require('../../models');

module.exports = async (name, description, status) => {
  const taskCreated = await Task.create({ name, description, status });
  return { status: 201, message: taskCreated };
};