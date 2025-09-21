const express = require('express')
const { mostrarInscripciones, crearInscripcion, editarInscripcion, borrarInscripcion, obtenerUnaInscripcion } = require('../Controllers/inscripciones')
const router = express.Router()

router.get('/', mostrarInscripciones)
router.get('/:id', obtenerUnaInscripcion)
router.post('/', crearInscripcion)
router.put('/:id', editarInscripcion)
router.delete('/:id', borrarInscripcion)

module.exports = router