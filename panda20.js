
var imgTotales = document.getElementsByClassName('img');
var eliminarElem = document.getElementsByClassName('quitar');


for (var i = 0; i < eliminarElem.length; i++) {
  imgTotales[i].addEventListener("click",ocultarImagen);

  function ocultarImagen() {
    this.style.display = "none";
  }
