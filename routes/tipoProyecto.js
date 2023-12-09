const { Router } = require('express');

const {
    createTipoProyecto,
    getTiposProyectos,
    getTipoProyectoPorId,
    updateTipoProyectoPorId
} = require('../controllers/tipoProyecto');

const router = Router();

// crear
router.post('/', createTipoProyecto);

// consultar todos
router.get('/', getTiposProyectos);

//consultar por ID
router.get('/:id', getTipoProyectoPorId);

// Actualizar por ID
router.put('/:id', updateTipoProyectoPorId);

/**
 * Actualiza una parte del tipos de equipos
 */
/*router.patch('/:id', (req, res) => {
    res.json({});
});*/

/**
 * Borra un tipos de equipos por id
 */
 //router.delete('/:id', deleteTipoEquipoByID);

module.exports = router;