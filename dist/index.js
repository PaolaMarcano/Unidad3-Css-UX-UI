/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 392:
/***/ (() => {

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

/***/ }),

/***/ 313:
/***/ (() => {

/* Paola Valentina Marcano Salas (C.I: 30.975.611)  */

/*Desplegar menu*/
const menu = document.querySelector(".cabecera__menu");
const desplegable = document.querySelector(".navbar-desplegable");
menu.addEventListener("click", function(){
  desplegable.classList.toggle("navbar-mostrar");
})

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* Paola Valentina Marcano Salas (C.I: 30.975.611)  */

__webpack_require__(313);
__webpack_require__(392);
})();

/******/ })()
;