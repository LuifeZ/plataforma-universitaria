const express = require('express');
const router = express.Router();
const ProfessorController = require('../controllers/professorController');

router.get('/', ProfessorController.listar);
router.get('/novo', ProfessorController.formularioNovo);
router.post('/', ProfessorController.criar);
router.get('/:id/editar', ProfessorController.formularioEditar);
router.put('/:id', ProfessorController.atualizar);
router.delete('/:id', ProfessorController.excluir);

module.exports = router;
