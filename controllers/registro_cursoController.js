var path = require('path');
const Registro_cursoModel = require("../models/curso_alumnos")

class Registro_cursoController{
  async registrarse(registro, respuesta){
    const alumno = new Registro_cursoModel({
      nombre: registro.nombre,
      email: registro.email,
      telefono: registro.telefono,
      mensaje: registro.mensaje
    })
    
    await alumno.save()
    respuesta.sendFile(path.resolve(__dirname,"../views/form-oferta-completado.html"))
  }
}

module.exports = new Registro_cursoController();