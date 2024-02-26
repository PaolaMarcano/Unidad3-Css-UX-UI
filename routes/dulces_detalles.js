var express = require('express');
var path = require('path');
var router = express.Router();


router.get('/productos',function(req, res, next){
  res.sendFile(path.resolve(__dirname,"../views/productos.html"))
})  

module.exports = router; 