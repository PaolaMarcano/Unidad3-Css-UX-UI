/* Paola Valentina Marcano Salas (C.I: 30.975.611)  */

var express = require('express');
var path = require('path');
var router = express.Router();
const Registro_cursoController = require('../controllers/registro_cursoController');


//Ruta con el metodo POST
router.post('/registro', Registro_cursoController.registrarse);


module.exports = router; 