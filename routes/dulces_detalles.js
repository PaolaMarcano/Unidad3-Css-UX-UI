var express = require('express');
var path = require('path');
var router = express.Router();


router.get('/productos',function(req, res, next){
  res.sendFile(path.resolve(__dirname,"../views/productos.html"))
})  

router.get('/productos_regalos',function(req, res, next){
  res.sendFile(path.resolve(__dirname,"../views/productos-regalos.html"))
})  

router.get('/productos_decoraciones',function(req, res, next){
  res.sendFile(path.resolve(__dirname,"../views/productos-decoraciones.html"))
})  


router.get('/carrito',function(req, res, next){
  res.sendFile(path.resolve(__dirname,"../views/carrito.html"))
})  

module.exports = router; 