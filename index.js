const bodyParser = require('body-parser');
const express = require('express');

const taskRouter = require('./routes/taskRouter');

const app = express();

app.use(bodyParser.json());

app.use('/', taskRouter);

app.listen(3001, () => console.log(`ouvindo porta ${3001}!`));
