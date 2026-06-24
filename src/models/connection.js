const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'portal_academico',
  port: 3306 // ajuste para 3307 se estiver usando XAMPP
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

module.exports = connection;
