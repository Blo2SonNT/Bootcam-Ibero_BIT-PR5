const express = require('express');
const router = express.Router()
const mascotaController = require('../controllers/mascotasController')


router.get('/', mascotaController.obtenerRegistrosMascotas)
router.post('/', mascotaController.crearMascota)
router.put('/:id', mascotaController.actualizarRegistroMascota)
router.delete('/:id', mascotaController.eliminarRegistroMascota)
router.get('/:id', mascotaController.obtenerRegistro)

module.exports = router