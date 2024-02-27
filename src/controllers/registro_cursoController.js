/* Paola Valentina Marcano Salas (C.I: 30.975.611)  */

var path = require('path');
const Registro_cursoModel = require("../models/curso_alumnos")

class Registro_cursoController{
  async registrarse(registro, respuesta){
    console.log(registro.body)
    const alumno = new Registro_cursoModel({
      nombre: registro.body.nombre,
      email: registro.body.email,
      telefono: registro.body.telefono,
      mensaje: registro.body.mensaje
    })
    
    await alumno.save()
    respuesta.sendFile(path.resolve(__dirname,"../views/form-oferta-completado.html"))
  }
}

module.exports = new Registro_cursoController();