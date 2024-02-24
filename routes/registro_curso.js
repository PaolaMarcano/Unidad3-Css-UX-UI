var express = require('express');
var path = require('path');
var router = express.Router();
const Registro_cursoController = require('../controllers/registro_cursoController');


router.get('/',function(req, res, next){
  res.sendFile(path.resolve(__dirname,"../views/form-oferta.html"))
})  

/* POST new user. */
router.post('/', function(req, res, next){
  Registro_cursoController.registrarse(req.body, res)
});

module.exports = router; 