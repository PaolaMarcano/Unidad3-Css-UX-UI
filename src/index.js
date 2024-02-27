/* Paola Valentina Marcano Salas (C.I: 30.975.611)  */

const express = require('express');
const cors = require('cors');
const app = express();
require('./config/connectionDB');


const formRuta = require('./routes/registro_curso');

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use('/form', formRuta);

app.listen(3000, () => console.log(`Servidor corriendo en el puerto 3000`)); 