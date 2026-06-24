const ProfessorModel = require('../models/professorModel');

const ProfessorController = {
  listar(req, res) {
    ProfessorModel.listarTodos((err, professores) => {
      if (err) return res.status(500).send('Erro ao buscar professores: ' + err.message);
      res.render('professores/index', { professores });
    });
  },

  formularioNovo(req, res) {
    res.render('professores/cadastro', { professor: null });
  },

  criar(req, res) {
    ProfessorModel.criar(req.body, (err) => {
      if (err) return res.status(500).send('Erro ao criar professor: ' + err.message);
      res.redirect('/professores');
    });
  },

  formularioEditar(req, res) {
    const { id } = req.params;
    ProfessorModel.buscarPorId(id, (err, resultados) => {
      if (err) return res.status(500).send('Erro ao buscar professor: ' + err.message);
      if (resultados.length === 0) return res.status(404).send('Professor não encontrado');
      res.render('professores/cadastro', { professor: resultados[0] });
    });
  },

  atualizar(req, res) {
    const { id } = req.params;
    ProfessorModel.atualizar(id, req.body, (err) => {
      if (err) return res.status(500).send('Erro ao atualizar professor: ' + err.message);
      res.redirect('/professores');
    });
  },

  excluir(req, res) {
    const { id } = req.params;
    ProfessorModel.excluir(id, (err) => {
      if (err) return res.status(500).send('Erro ao excluir professor: ' + err.message);
      res.redirect('/professores');
    });
  }
};

module.exports = ProfessorController;
