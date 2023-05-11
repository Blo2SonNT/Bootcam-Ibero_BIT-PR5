const express = require('express');
const router = express.Router()
const mascotaController = require('../controllers/mascotasController')


router.get('/', (req, res) => {
    res.send('Me manda datos la api')
})

router.put('/', (req, res) => {
    res.send('Actualizando datos de mi api')
})

router.delete('/', (req, res) => {
    res.send('Borrando datos de mi api')
})

router.post('/', mascotaController.crearMascota)

module.exports = router
