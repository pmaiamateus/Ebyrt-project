const { expect } = require('chai');
const shell = require('shelljs');
const { Task } = require('../../../models');

const { createTaskService } = require('../../../services/tasks');

describe('Test createTask', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });
  it('Test if task is created correctly', async () => {
    const createTaskResponse = await createTaskService('create createTask route',
    'start coding the post route of the task app', 'em andamento');
    expect(createTaskResponse).to.be.a('object');
    expect(createTaskResponse.status).to.be.equal(201);
    expect(createTaskResponse.message).to.be.a('object');
    expect(createTaskResponse.message).to.have.property('id');
    expect(createTaskResponse.message).to.have.property('name');
    expect(createTaskResponse.message).to.have.property('description');
    expect(createTaskResponse.message).to.have.property('status');
    const taskFromDb = await Task.findByPk(createTaskResponse.message.id);
    expect(createTaskResponse.message.id).to.be.equal(taskFromDb.dataValues.id);
    expect(createTaskResponse.message.name).to.be.equal(taskFromDb.dataValues.name);
    expect(createTaskResponse.message.description).to.be.equal(taskFromDb.dataValues.description);
    expect(createTaskResponse.message.status).to.be.equal(taskFromDb.dataValues.status);
});});