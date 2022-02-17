const { Task } = require('../../models');

module.exports = async () => {
  try {
    const getAllTasks = await Task.findAll();
    return { status: 200, message: getAllTasks };
  } catch (error) {
    return { status: 500, message: error };
  }
};