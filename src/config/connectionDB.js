/* Paola Valentina Marcano Salas (C.I: 30.975.611)  */

const mongoose = require('mongoose')

let connection = mongoose.connect("mongodb+srv://marcanoSalasPV:M0ng0d4ndd@cluster0.jkpp0yn.mongodb.net/dulces_delicias")
  .then(() => console.log("Conexión exitosa"))
  .catch((err) => console.log("Conexión fallida"))