window.onload = cargar;

function  cargar() {
	document.formulariomarzo.onsubmit = enviar;
	document.formulariomarzo.nombre.onkeypress = soloAdmitirLetrasEspacios;
	document.formulariomarzo.descripcion.onkeypress = soloAdmitirLetrasEspacios;

	document.formulariomarzo.codigoexpor.onfocus = cambiarAspecto;
	document.formulariomarzo.codigoexpor.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.nombre.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.nombre.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.unidades.onfocus = cambiarAspecto;
	document.formulariomarzo.unidades.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.interno.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.interno.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.descripcion.onfocus = cambiarAspecto;
	document.formulariomarzo.descripcion.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.valor.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.valor.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.internacional.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.internacional.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.caracteristicas.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.caracteristicas.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.fecha.onblur = volverAlAspectoOriginal;
	document.formulariomarzo.fecha.onblur = volverAlAspectoOriginal;
}

function soloAdmitirLetrasEspacios(key){
	if(!esDigito(key["key"])){
		this.value = this.value.replace(/[a-záéíóúüñ ]/i,"");
	}
}

function cambiarAspecto(){
	this.value = "";
	this.style.background = "yellow";
	this.style.color = "blue"; 
}

function volverAlAspectoOriginal(){
	this.style.background = "white";
	this.style.color = "black";
}


function enviar(){
	var enviar = true;

	if(!validarCodigoExportacion(document.formulariomarzo.codigoexpor.value)){
		enviar = false;
		document.formulariomarzo.errcodigoexpor.value = "El código de exportacion no tiene el formato correcto\n";
	}

	if(!validarNombre(document.formulariomarzo.nombre.value)){
		enviar = false;
		document.formulariomarzo.errnombre.value = "El nombre del articulo no tiene el formato correcto\n";
	}

	if(!validarUnidades(document.formulariomarzo.unidades.value)){
		enviar = false;
		document.formulariomarzo.errunidades.value = "El numero de unidades no tiene el formato correcto\n";
	}

	if(!validarCodigoInterno(document.formulariomarzo.interno.value)){
		enviar = false;
		document.formulariomarzo.errinterno.value = "El código interno no tiene el formato correcto\n";
	}

	if(!validarDescripcion(document.formulariomarzo.descripcion.value)){
		enviar = false;
		document.formulariomarzo.errdescripcion.value = "La descripciond del articulo no tiene el formato correcto\n";
	}

	if(!validarValor(document.formulariomarzo.valor.value)){
		enviar = false;
		document.formulariomarzo.errvalor.value = "El valor no tiene el formato correcto\n";
	}

	if(!validarCodInternacional(document.formulariomarzo.internacional.value)){
		enviar = false;
	   document.formulariomarzo.errinternacional.value = "El código internacional no tiene el formato correcto\n";
	}

	if(!validarCarecteristicas(document.formulariomarzo.caracteristicas.value)){
		enviar = false;
		document.formulariomarzo.errcaracteristicas.value= "Las caracteristicas del articulo no tiene el formato correcto\n";
	}

	if(!validarFecha(document.formulariomarzo.fecha.value)){
		enviar = false;
		document.formulariomarzo.errfecha.value = "La fecha no tiene el formato correcto\n";
	}

	if(!comprobarTipoArticulo(document.formulariomarzo.tipo)){
		enviar = false;
		document.formulariomarzo.errtipo.value= "Debe selecionarse un tipo de articulo\n";
	}

	if(!comprobarCiudades(document.formulariomarzo.elements)){
		enviar = false;
		document.formulariomarzo.errciudad.value= "Debe selecionarse al menos 2 ciudaddes\n";
	}
	
	if(!comprobarComunidades(document.formulariomarzo.comunidad)){
		enviar = false;
		document.formulariomarzo.errcomunidades.value= "Debe selecionarse al menos 4 comunidades\n";
	}

	return false;
	//return enviar;
}