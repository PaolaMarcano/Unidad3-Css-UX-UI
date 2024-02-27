/*Desplegar menu*/
const menu = document.querySelector(".cabecera__menu");
const desplegable = document.querySelector(".navbar-desplegable");
menu.addEventListener("click", function(){
  desplegable.classList.toggle("navbar-mostrar");
})