const express = require('express');

const app = express();
const cors = require('cors');
const pool = require('./db');

const port = 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});

// CREATE
app.post('/todos', async (req, res) => {
  try {
    // console.log(req.body);
    const { todoInput } = req.body;
    console.log(todoInput);
    const newTodo = await pool.query(
      `INSERT INTO todo (description) VALUES($1) RETURNING *`,
      [todoInput]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// READ
// get all Todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a specific todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// UPDATE
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { editTodo } = req.body;
    const updateTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2',
      [editTodo.description, id]
    );
    res.json('Edit successful');
  } catch (error) {
    console.error(error.message);
  }
});

// DELETE
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [
      id,
    ]);
    res.json('Deleted todo');
  } catch (error) {
    console.error(error.message);
  }
});
