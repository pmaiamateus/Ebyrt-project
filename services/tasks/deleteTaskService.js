const { Task } = require('../../models');

module.exports = async (taskId) => {
  try {
    const deletedTask = await Task.destroy({ where: { id: taskId } });
    if (deletedTask === 1) {
      return { status: 410, message: 'deleted' };
    }
    if (deletedTask === 0) {
      return { status: 410, message: 'task does not exist' };
    }
  } catch (error) {
    return { status: 500, message: error };
  }
};