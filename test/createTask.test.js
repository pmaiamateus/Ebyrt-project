const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('Tests endpoint /POST', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
  });
  it('Tests successful create task', async () => {
    await frisby
      .post(`${url}`,
      {
        name: 'create createTask route',
        description: 'start coding the post route of the task app',
        status: 'em andamento',
      })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.id).toBe(1);
        expect(json.name).toBe('create createTask route');
        expect(json.description).toBe('start coding the post route of the task app');
        expect(json.status).toBe('em andamento');
      });
  });
  it('Tests if it is not possible to create task without name', async () => {
    await frisby
      .post(`${url}`, {
        name: 'create createTask route',
        status: 'em andamento',
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"description" is required');
      });
  });
  it('Tests if it is not possible to create task without description', async () => {
    await frisby
      .post(`${url}`, {
        description: 'start coding the post route of the task app',
        status: 'em andamento',
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"name" is required');
      });
  });
  it('Tests if it is not possible to create task without status', async () => {
    await frisby
      .post(`${url}`, {
        name: 'create createTask route',
        description: 'start coding the post route of the task app',
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"status" is required');
      });
  });
  it('Tests if it is not possible to create task with status not in specified ones', async () => {
    await frisby
      .post(`${url}`, {
        name: 'create createTask route',
        description: 'start coding the post route of the task app',
        status: 'active',
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('status type not supported');
      });
  });
});