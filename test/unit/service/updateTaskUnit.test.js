const { expect } = require('chai');
const shell = require('shelljs');
const { Task } = require('../../../models');

const { updateTaskService, createTaskService } = require('../../../services/tasks');

describe('Test createTask', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });
  it('Test if task is created correctly', async () => {
    const createServiceResponse = await createTaskService('create createTask route',
    'start coding the post route of the task app', 'em andamento');
    const updateTaskResponse = await updateTaskService(createServiceResponse.message.id,
      'create createTask route', 'start coding the post route of the task app', 'pronto');
    expect(updateTaskResponse).to.be.a('object');
    expect(updateTaskResponse.status).to.be.equal(200);
    expect(updateTaskResponse.message).to.be.a('object');
    expect(updateTaskResponse.message).to.have.property('id');
    expect(updateTaskResponse.message).to.have.property('name');
    expect(updateTaskResponse.message).to.have.property('description');
    expect(updateTaskResponse.message).to.have.property('status');
    expect(updateTaskResponse.message).to.have.property('updated');
    const taskFromDb = await Task.findByPk(updateTaskResponse.message.id);
    expect(updateTaskResponse.message.id).to.be.equal(taskFromDb.dataValues.id);
    expect(updateTaskResponse.message.name).to.be.equal(taskFromDb.dataValues.name);
    expect(updateTaskResponse.message.description).to.be.equal(taskFromDb.dataValues.description);
    expect(updateTaskResponse.message.status).to.be.equal(taskFromDb.dataValues.status);
    expect(updateTaskResponse.message.updated).to.be.equal('updated');
    const reupdateTaskResponse = await updateTaskService(createServiceResponse.message.id,
      'create createTask route', 'start coding the post route of the task app', 'pronto');
    expect(reupdateTaskResponse).to.be.a('object');
    expect(reupdateTaskResponse.status).to.be.equal(200);
    expect(reupdateTaskResponse.message).to.be.a('object');
    expect(reupdateTaskResponse.message).to.have.property('id');
    expect(reupdateTaskResponse.message).to.have.property('name');
    expect(reupdateTaskResponse.message).to.have.property('description');
    expect(reupdateTaskResponse.message).to.have.property('status');
    expect(reupdateTaskResponse.message).to.have.property('updated');
    const secondTaskFromDb = await Task.findByPk(reupdateTaskResponse.message.id);
    expect(reupdateTaskResponse.message.id).to.be.equal(secondTaskFromDb.dataValues.id);
    expect(reupdateTaskResponse.message.name).to.be.equal(secondTaskFromDb.dataValues.name);
    expect(reupdateTaskResponse.message.description).to.be.equal(secondTaskFromDb.dataValues.description);
    expect(reupdateTaskResponse.message.status).to.be.equal(secondTaskFromDb.dataValues.status);
    expect(reupdateTaskResponse.message.updated).to.be.equal('task sent was equal');
  });
});