/* Paola Valentina Marcano Salas (C.I: 30.975.611)  */

/* Guardar datos del formulario*/
const form = document.getElementById('form-oferta');

form.addEventListener('submit', async () => {

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if(!nombre || !email || !telefono) return window.alert('Por favor completar los tres primeros campos')

    const respuesta = await fetch('http://localhost:3000/form/registro', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, email, telefono, mensaje}),
      });
    const data = await respuesta.json();

    if (data.error) return window.alert(`ERROR: ${data.mensaje}`)
    form.reset();
     window.alert(data.mensaje);
})