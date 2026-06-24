const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/alunoController');

router.get('/', AlunoController.listar);
router.get('/novo', AlunoController.formularioNovo);
router.post('/', AlunoController.criar);
router.get('/:id/editar', AlunoController.formularioEditar);
router.put('/:id', AlunoController.atualizar);
router.delete('/:id', AlunoController.excluir);

module.exports = router;
