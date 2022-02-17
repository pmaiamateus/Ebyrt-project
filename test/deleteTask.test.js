const frisby = require('frisby');
const shell = require('shelljs');

const { Task } = require('../models');

const url = 'http://localhost:3001';

describe('Tests endpoint /DELETE', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });
  it('Tests successful delete task', async () => {
    const { dataValues: { id } } = await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
      .del(`${url}`, { id })
      .expect('status', 410)
      .then((response) => {
        const { json } = response;
        expect(json).toBe('deleted');
      });
  });
  it('Tests route return task does not exist when wrong id or id not in database', async () => {
    await frisby
      .del(`${url}`, { id: 1 })
      .expect('status', 410)
      .then((response) => {
        const { json } = response;
        expect(json).toBe('task does not exist');
      });
  });
  it('Tests if it is not possible to delete task without id', async () => {
    await frisby
      .del(`${url}`)
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"id" is required');
      });
  });
  it('Tests if it is not possible to delete task with id not number', async () => {
    await frisby
      .del(`${url}`, { id: 'not a number' })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"id" must be a number');
      });
  });
});