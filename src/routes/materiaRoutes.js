const express = require('express');
const router = express.Router();
const MateriaController = require('../controllers/materiaController');

router.get('/', MateriaController.listar);
router.get('/novo', MateriaController.formularioNovo);
router.post('/', MateriaController.criar);
router.get('/:id/editar', MateriaController.formularioEditar);
router.put('/:id', MateriaController.atualizar);
router.delete('/:id', MateriaController.excluir);

module.exports = router;
