const connection = require('./connection');

const ProfessorModel = {
  listarTodos(callback) {
    connection.query('SELECT * FROM professores', callback);
  },

  buscarPorId(id, callback) {
    connection.query('SELECT * FROM professores WHERE id = ?', [id], callback);
  },

  criar(dados, callback) {
    const { nome, email, cpf, disciplinas } = dados;
    connection.query(
      'INSERT INTO professores (nome, email, cpf, disciplinas) VALUES (?, ?, ?, ?)',
      [nome, email, cpf, disciplinas],
      callback
    );
  },

  atualizar(id, dados, callback) {
    const { nome, email, cpf, disciplinas } = dados;
    connection.query(
      'UPDATE professores SET nome = ?, email = ?, cpf = ?, disciplinas = ? WHERE id = ?',
      [nome, email, cpf, disciplinas, id],
      callback
    );
  },

  excluir(id, callback) {
    connection.query('DELETE FROM professores WHERE id = ?', [id], callback);
  }
};

module.exports = ProfessorModel;
