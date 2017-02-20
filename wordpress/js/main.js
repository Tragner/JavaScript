// variables
let tituloHeader = document.querySelector('#tituloHeader');
let tituloInput = document.querySelector('#titulo');
let contenidoInput = document.querySelector('#contenido');
let contenidoHTML = document.querySelector('#contenidoHTML');
let header = document.querySelector('#header');
let imagen = document.querySelector('#imagen');
let colorInput = document.querySelector('#colorTexto');
let colorHTML = document.querySelector('#contenidoHTML');

// funciones
let guardar = function() {
	// Titulo
	tituloHeader.innerHTML = tituloInput.value;
	// Contenido
	contenidoHTML.innerHTML = contenidoInput.value;
	// Imagen
	header.style.backgroundImage = `url(${imagen.value})`;
	// Color
	tituloHeader.style.color = colorInput.value;
	contenidoHTML.style.color = colorInput.value;

}
