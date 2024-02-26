var express = require('express');
var path = require('path');
var router = express.Router();


router.get('/productos',function(req, res, next){
  res.sendFile(path.resolve(__dirname,"../views/productos.html"))
})  


router.get('/carrito',function(req, res, next){
  res.sendFile(path.resolve(__dirname,"../views/carrito.html"))
})  

module.exports = router; 