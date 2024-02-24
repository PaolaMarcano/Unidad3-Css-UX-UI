const mongoose = require('mongoose')

let connection = mongoose.connect("mongodb+srv://marcanoSalasPV:M0ng0d4ndd@cluster0.jkpp0yn.mongodb.net/dulces_deliciasretryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Conexión exitosa"))
  .catch((err) => console.log("Conexión fallida"))
