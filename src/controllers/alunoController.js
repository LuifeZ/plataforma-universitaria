const AlunoModel = require('../models/alunoModel');

const AlunoController = {
  listar(req, res) {
    AlunoModel.listarTodos((err, alunos) => {
      if (err) return res.status(500).send('Erro ao buscar alunos: ' + err.message);
      res.render('alunos/index', { alunos });
    });
  },

  formularioNovo(req, res) {
    res.render('alunos/cadastro', { aluno: null });
  },

  criar(req, res) {
    AlunoModel.criar(req.body, (err) => {
      if (err) return res.status(500).send('Erro ao criar aluno: ' + err.message);
      res.redirect('/alunos');
    });
  },

  formularioEditar(req, res) {
    const { id } = req.params;
    AlunoModel.buscarPorId(id, (err, resultados) => {
      if (err) return res.status(500).send('Erro ao buscar aluno: ' + err.message);
      if (resultados.length === 0) return res.status(404).send('Aluno não encontrado');
      res.render('alunos/cadastro', { aluno: resultados[0] });
    });
  },

  atualizar(req, res) {
    const { id } = req.params;
    AlunoModel.atualizar(id, req.body, (err) => {
      if (err) return res.status(500).send('Erro ao atualizar aluno: ' + err.message);
      res.redirect('/alunos');
    });
  },

  excluir(req, res) {
    const { id } = req.params;
    AlunoModel.excluir(id, (err) => {
      if (err) return res.status(500).send('Erro ao excluir aluno: ' + err.message);
      res.redirect('/alunos');
    });
  }
};

module.exports = AlunoController;
