const MateriaModel = require('../models/materiaModel');
const ProfessorModel = require('../models/professorModel');

const MateriaController = {
  listar(req, res) {
    MateriaModel.listarTodos((err, materias) => {
      if (err) return res.status(500).send('Erro ao buscar matérias: ' + err.message);
      res.render('materias/index', { materias });
    });
  },

  formularioNovo(req, res) {
    ProfessorModel.listarTodos((err, professores) => {
      if (err) return res.status(500).send('Erro ao buscar professores: ' + err.message);
      res.render('materias/cadastro', { materia: null, professores });
    });
  },

  criar(req, res) {
    MateriaModel.criar(req.body, (err) => {
      if (err) return res.status(500).send('Erro ao criar matéria: ' + err.message);
      res.redirect('/materias');
    });
  },

  formularioEditar(req, res) {
    const { id } = req.params;
    MateriaModel.buscarPorId(id, (err, resultados) => {
      if (err) return res.status(500).send('Erro ao buscar matéria: ' + err.message);
      if (resultados.length === 0) return res.status(404).send('Matéria não encontrada');

      ProfessorModel.listarTodos((err2, professores) => {
        if (err2) return res.status(500).send('Erro ao buscar professores: ' + err2.message);
        res.render('materias/cadastro', { materia: resultados[0], professores });
      });
    });
  },

  atualizar(req, res) {
    const { id } = req.params;
    MateriaModel.atualizar(id, req.body, (err) => {
      if (err) return res.status(500).send('Erro ao atualizar matéria: ' + err.message);
      res.redirect('/materias');
    });
  },

  excluir(req, res) {
    const { id } = req.params;
    MateriaModel.excluir(id, (err) => {
      if (err) return res.status(500).send('Erro ao excluir matéria: ' + err.message);
      res.redirect('/materias');
    });
  }
};

module.exports = MateriaController;
