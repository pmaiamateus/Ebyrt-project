const { Task } = require('../../models');

module.exports = async (taskId, taskName, taskDescription, taskStatus) => {
  const updatedTask = await Task.update(
    { 
      name: taskName,
      description: taskDescription,
      status: taskStatus,
    },
    { where: { id: taskId } },
  );
  if (updatedTask[0] === 0) {
    return { status: 200, message: {
      id: taskId,
      name: taskName,
      description: taskDescription,
      status: taskStatus,
      updated: 'task sent was equal' } };
  }
  if (updatedTask[0] === 1) {
    return { status: 200, message: {
      id: taskId,
      name: taskName,
      description: taskDescription,
      status: taskStatus,
      updated: 'updated' } };
  }};