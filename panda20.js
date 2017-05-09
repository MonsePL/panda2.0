
var imgTotales = document.getElementsByClassName('img');
var eliminarElem = document.getElementsByClassName('quitar');


for (var i = 0; i < eliminarElem.length; i++) {
  eliminarElem[i].addEventListener("click",ocultarImagen);}

  function ocultarImagen() {
    this.parentNode.style.display = "none";
  }
