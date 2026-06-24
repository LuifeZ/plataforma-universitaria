const connection = require('./connection');

const MateriaModel = {
  listarTodos(callback) {
    const sql = `
      SELECT materias.*, professores.nome AS professor_nome
      FROM materias
      LEFT JOIN professores ON materias.professor_id = professores.id
    `;
    connection.query(sql, callback);
  },

  buscarPorId(id, callback) {
    connection.query('SELECT * FROM materias WHERE id = ?', [id], callback);
  },

  criar(dados, callback) {
    const { nome, carga_horaria, professor_id } = dados;
    connection.query(
      'INSERT INTO materias (nome, carga_horaria, professor_id) VALUES (?, ?, ?)',
      [nome, carga_horaria, professor_id || null],
      callback
    );
  },

  atualizar(id, dados, callback) {
    const { nome, carga_horaria, professor_id } = dados;
    connection.query(
      'UPDATE materias SET nome = ?, carga_horaria = ?, professor_id = ? WHERE id = ?',
      [nome, carga_horaria, professor_id || null, id],
      callback
    );
  },

  excluir(id, callback) {
    connection.query('DELETE FROM materias WHERE id = ?', [id], callback);
  }
};

module.exports = MateriaModel;
