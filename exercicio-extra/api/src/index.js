const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.API_PORT || 3000;

// Configurações do pool de conexão usando variáveis de ambiente
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432, 
});

// Rota de Healthcheck (Requisito)
app.get('/health', async (req, res) => {
  try {
    // Tenta uma consulta simples para checar a conexão do DB
    await pool.query('SELECT 1'); 
    res.json({ status: "ok", db: "connected" });
  } catch (err) {
    console.error("Healthcheck falhou:", err.message);
    res.status(500).json({ status: "error", db: "disconnected" });
  }
});

// Rota Principal (Teste de Conexão)
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`API: Hello from Docker! Última conexão ao DB: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send(`Erro ao consultar o DB: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});