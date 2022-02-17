const { expect } = require('chai');
const frisby = require('frisby');
const shell = require('shelljs');

const { Task } = require('../models');

const url = 'http://localhost:3001';

describe('Tests endpoint /GET', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });
  it('Tests successful get task', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await Task.create({
      name: 'create getTask route',
      description: 'start coding the get route of the task app',
      status: 'pendente',
    });
    await frisby
      .get(`${url}`)
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        const firstTask = json[0];
        const secondTask = json[1];
        expect(firstTask.id).to.be.equal(1);
        expect(firstTask.name).to.be.equal('create createTask route');
        expect(firstTask.description).to.be.equal('start coding the post route of the task app');
        expect(firstTask.status).to.be.equal('em andamento');
        expect(secondTask.id).to.be.equal(2);
        expect(secondTask.name).to.be.equal('create getTask route');
        expect(secondTask.description).to.be.equal('start coding the get route of the task app');
        expect(secondTask.status).to.be.equal('pendente');
      });
  });
});