const express = require('express');
const router = express.Router()
const productoController = require('../controllers/productoController')
const usuarioController = require('../controllers/usuarioController')

router.get('/productos', productoController.obtenerProductos)
router.get('/producto/:id', productoController.obtenerProducto)
router.post('/productos', productoController.crearProducto)
router.put('/productos/:id', productoController.actualizarProducto)
router.delete('/productos/:id', productoController.eliminarProducto)


router.get('/usuarios', usuarioController.obtenerUsuarios)
router.get('/usuario/:id', usuarioController.obtenerUsuario)
router.post('/usuario', usuarioController.crearUsuario)
router.put('/usuario/id', usuarioController.actualizarUsuario)
router.delete('/usuario/id', usuarioController.eliminarUsuario)


module.exports = router