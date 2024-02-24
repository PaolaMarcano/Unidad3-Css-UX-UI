require("./config/connectionDB")
const Curso_alumnos = require("./modelos/curso_alumnos") 

//usar con: node registro_curso.js

const http = require("http")
const fs = require("fs")
var querystring = require('querystring');

const server = http.createServer((req, res) => {
  const read = fs.createReadStream("./static/form-oferta.html")
  read.pipe(res)
  if(req.method == 'POST'){
    console.log(req.method)
    var post = '';
    req.on('data', function(data){
      post += data;
    })
    req.on('end', function(){
      var registro_post = querystring.parse(post);

      const alumno = new Curso_alumnos({
        nombre: registro_post.nombre,
        email: registro_post.email,
        telefono: registro_post.telefono,
        mensaje: registro_post.mensaje
      })
      
      
      async function guardar(documento){
        const alumno_guardado = await documento.save()
        return alumno_guardado
      }
      
      guardar(alumno)
        .then(alumno_registrado => console.log(alumno_registrado))
        .catch(err => console.log(err)) 
   });
  }
})

server.listen(3000)
console.log("Servidor en el puerto 3000")
