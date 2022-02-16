const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});