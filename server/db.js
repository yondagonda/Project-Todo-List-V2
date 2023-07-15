/* SQL commands used to create the DB in PostgreSQL

CREATE DATABASE todolistv2;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
*/

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'test',
  host: 'localhost',
  port: 5432,
  database: 'todolistv2',
});

module.exports = pool;
