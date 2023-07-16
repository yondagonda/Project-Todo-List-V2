const express = require('express');

const app = express();
const cors = require('cors');
const pool = require('./db');

const port = 5000;

app.use(cors());
app.use(express.json());

// CREATE
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    console.log(description);
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1)',
      [description]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
