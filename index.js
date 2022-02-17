const bodyParser = require('body-parser');
const express = require('express')
require('dotenv').config();

const taskRouter = require('./routes/taskRouter');

const app = express();

app.use(bodyParser.json());

const PORT = 3000 || process.env.PORT;

app.use('/', taskRouter);

app.listen(3001, () => console.log(`ouvindo porta ${3001}!`));
