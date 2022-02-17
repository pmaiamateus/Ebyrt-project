const { expect } = require('chai');
const shell = require('shelljs');
const { Task } = require('../../../models');

const { deleteTaskService, createTaskService } = require('../../../services/tasks');

describe('Test createTask', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });
  it('Test if task is created correctly', async () => {
    const createTaskResponse = await createTaskService('create createTask route',
    'start coding the post route of the task app', 'em andamento');
    const deleteTaskResponse = await deleteTaskService(createTaskResponse.message.id);
    expect(deleteTaskResponse).to.be.a('object');
    expect(deleteTaskResponse.status).to.be.equal(410);
    expect(deleteTaskResponse.message).to.be.a('string');
    expect(deleteTaskResponse.message).to.be.equal('deleted');
    const redeleteTaskResponse = await deleteTaskService(createTaskResponse.message.id);
    expect(redeleteTaskResponse).to.be.a('object');
    expect(redeleteTaskResponse.status).to.be.equal(410);
    expect(redeleteTaskResponse.message).to.be.a('string');
    expect(redeleteTaskResponse.message).to.be.equal('task does not exist');
    const deletedTask = await Task.findByPk(createTaskResponse.message.id);
    expect(deletedTask).to.be.equal(null);
});});