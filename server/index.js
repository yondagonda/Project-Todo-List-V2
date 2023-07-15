const express = require('express');

const app = express();
const cors = require('cors');
const pool = require('./db');

const port = 5000;

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});

app.use(cors());
app.use(express.json());

// CREATE
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    console.log(description);
  } catch (err) {
    console.error(err.message);
  }
});
