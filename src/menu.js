/* Paola Valentina Marcano Salas (C.I: 30.975.611)  */

/*Desplegar menu*/
const menu = document.querySelector(".cabecera__menu");
const desplegable = document.querySelector(".navbar-desplegable");
menu.addEventListener("click", function(){
  desplegable.classList.toggle("navbar-mostrar");
})