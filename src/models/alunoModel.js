const connection = require('./connection');

const AlunoModel = {
  listarTodos(callback) {
    connection.query('SELECT * FROM alunos', callback);
  },

  buscarPorId(id, callback) {
    connection.query('SELECT * FROM alunos WHERE id = ?', [id], callback);
  },

  criar(dados, callback) {
    const { nome, email, matricula } = dados;
    connection.query(
      'INSERT INTO alunos (nome, email, matricula) VALUES (?, ?, ?)',
      [nome, email, matricula],
      callback
    );
  },

  atualizar(id, dados, callback) {
    const { nome, email, matricula } = dados;
    connection.query(
      'UPDATE alunos SET nome = ?, email = ?, matricula = ? WHERE id = ?',
      [nome, email, matricula, id],
      callback
    );
  },

  excluir(id, callback) {
    connection.query('DELETE FROM alunos WHERE id = ?', [id], callback);
  }
};

module.exports = AlunoModel;
