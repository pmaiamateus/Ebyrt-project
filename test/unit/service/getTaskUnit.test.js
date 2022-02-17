const { expect } = require('chai');
const shell = require('shelljs');

const { getTaskService, createTaskService } = require('../../../services/tasks');

describe('Test createTask', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });
  it('Test if task is created correctly', async () => {
    await createTaskService('create createTask route',
    'start coding the post route of the task app', 'em andamento');
    await createTaskService('create getTask route',
    'start coding the get route of the task app', 'pendente');
    const getTaskResponse = await getTaskService();
    expect(getTaskResponse).to.be.a('object');
    expect(getTaskResponse.status).to.be.equal(200);
    expect(getTaskResponse.message).to.be.a('array');
    getTaskResponse.message.forEach((task) => {
      expect(task).to.be.a('object');
      expect(task.id).to.be.a('number');
      expect(task.name).to.be.a('string');
      expect(task.description).to.be.a('string');
      expect(task.status).to.be.a('string');
    });
  });
});