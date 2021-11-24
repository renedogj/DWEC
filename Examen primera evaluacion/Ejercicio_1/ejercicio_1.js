window.onload = cargar;

function  cargar() {
	document.primerFormulario.onsubmit = enviar;
}

function enviar(){
	var mensajeError = "";
	var enviar = true;

	if(!comprobarCodLibro(document.primerFormulario.codigo.value)){
		enviar = false;
		mensajeError += "El código del libro no tiene el formato correcto\n";
	}

	if(!tituloLibro(document.primerFormulario.titulo.value)){
		enviar = false;
		mensajeError += "El titulo del libro no tiene el formato correcto\n";
	}

	if(!comprobarAutor(document.primerFormulario.autor.value)){
		enviar = false;
		mensajeError += "El auto no tiene el formato correcto\n";
	}

	if(!comprobarEditorial(document.primerFormulario.editorial.value)){
		enviar = false;
		mensajeError += "La editorial no tiene el formato correcto\n";
	}

	if(!fechaPublicacion(document.primerFormulario.fecha.value)){
		enviar = false;
		mensajeError += "La fecha de publicación no tiene el formato correcto\n";
	}

	if(!codigoISBN(document.primerFormulario.codigo.value)){
		enviar = false;
		mensajeError += "El código ISBN no tiene el formato correcto\n";
	}

	if(!precioLibro(document.primerFormulario.precio.value)){
		enviar = false;
		mensajeError += "El precio del libro no tiene el formato correcto\n";
	}

	if(!comprobarEstiloLibro(document.primerFormulario.estilo.value)){
		enviar = false;
		mensajeError += "El estilo del libro no tiene el formato correcto\n";
	}

	if(!comprobarNumPaginas(document.primerFormulario.paginas.value)){
		enviar = false;
		mensajeError += "El número de páginas no es correcto\n";
	}

	if(!comprobarFormatos(document.primerFormulario.formato)){
		enviar = false;
		mensajeError += "No se ha selecionado ningún formato\n";
	}

	if(!comprobarIdiomas(document.primerFormulario.multiidioma)){
		enviar = false;
		mensajeError += "Se han selecionado menos de dos idiomas\n";
	}

	if(!comprobarPaises(document.primerFormulario.elements)){
		enviar = false;
		mensajeError += "Se han selecionado menos de 5 idiomas";
	}

	if(mensajeError != ""){
		alert(mensajeError);
	}
	return enviar;
}