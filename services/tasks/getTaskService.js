const { Task } = require('../../models');

module.exports = async () => {
  try {
    const getAllTasks = await Task.findAll();
    return { status: 201, message: getAllTasks };
  } catch (error) {
    return { status: 400, message: error };
  }
};