const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Variáveis de Ambiente
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Falha ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('Conexão com PostgreSQL bem-sucedida em:', res.rows[0].now);
  }
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Hello from Docker! Conectado ao DB em: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send(`Erro ao consultar o DB: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});