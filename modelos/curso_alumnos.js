require("../config/connectionDB")
const { Schema, model } = require('mongoose')

const curso_alumnos_schema = new Schema({
  nombre:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  telefono:{
    type: String,
    required:true
  },
  mensaje:{
    type: String,
    default: ""
  }
})

module.exports = model("Curso_alumnos", curso_alumnos_schema)