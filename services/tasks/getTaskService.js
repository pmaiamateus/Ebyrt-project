const { Task } = require('../../models');

module.exports = async () => {
  const getAllTasks = await Task.findAll();
  let taskArray = [];
  getAllTasks.forEach((task) => {
    taskArray.push(task.dataValues);
  });
  return { status: 200, message: taskArray };
};