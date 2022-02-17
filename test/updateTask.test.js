const { expect } = require('chai');
const frisby = require('frisby');
const shell = require('shelljs');

const { Task } = require('../models');

const url = 'http://localhost:3001';

describe('Tests endpoint /PUT', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });

  it('Tests successful update task', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
      .put(`${url}`,
      {
        id: 1,
        name: 'create createTask route',
        description: 'start coding the post route of the task app',
        status: 'pronto',
      })
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json.id).to.be.equal(1);
        expect(json.name).to.be.equal('create createTask route');
        expect(json.description).to.be.equal('start coding the post route of the task app');
        expect(json.status).to.be.equal('pronto');
        expect(json.updated).to.be.equal('updated');
      });
  });

  it('Test trying to update but sending the exact same task returns that is the same task', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
      .put(`${url}`,
      {
        id: 1,
        name: 'create createTask route',
        description: 'start coding the post route of the task app',
        status: 'em andamento',
      })
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json.id).to.be.equal(1);
        expect(json.name).to.be.equal('create createTask route');
        expect(json.description).to.be.equal('start coding the post route of the task app');
        expect(json.status).to.be.equal('em andamento');
        expect(json.updated).to.be.equal('task sent was equal');
      });
  });

  it('Test is not possible to update task without id', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
    .put(`${url}`, {
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).to.be.equal('"id" is required');
    });
  });

  it('Test is not possible to update task with id not number', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
    .put(`${url}`, {
      id: 'not a number',
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).to.be.equal('"id" must be a number');
    });
  });

  it('Test is not possible to update task without name', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
    .put(`${url}`, {
      id: 1,
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).to.be.equal('"name" is required');
    });
  });

  it('Test is not possible to update task with name not string', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
    .put(`${url}`, {
      id: 1,
      name: 1,
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).to.be.equal('"name" must be a string');
    });
  });

  it('Test is not possible to update task without description', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
    .put(`${url}`, {
      id: 1,
      name: 'create createTask route',
      status: 'em andamento',
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).to.be.equal('"description" is required');
    });
  });

  it('Test is not possible to update task with description not string', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
    .put(`${url}`, {
      id: 1,
      name: 'create createTask route',
      description: 1,
      status: 'em andamento',
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).to.be.equal('"description" must be a string');
    });
  });

  it('Test is not possible to update task without status', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
    .put(`${url}`, {
      id: 1,
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).to.be.equal('"status" is required');
    });
  });

  it('Test is not possible to update task with status not string', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
    .put(`${url}`, {
      id: 1,
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 1,
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).to.be.equal('"status" must be a string');
    });
  });
  it('Test is not possible to update task with status not in types required', async () => {
    await Task.create({
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'em andamento',
    });
    await frisby
    .put(`${url}`, {
      id: 1,
      name: 'create createTask route',
      description: 'start coding the post route of the task app',
      status: 'active',
    })
    .expect('status', 400)
    .then((response) => {
      const { json } = response;
      expect(json.message).to.be.equal('status type not supported');
    });
  });
});