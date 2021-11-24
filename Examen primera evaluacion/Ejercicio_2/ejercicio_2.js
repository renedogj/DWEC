window.onload = cargar;

function  cargar() {
	document.formulario.onsubmit = enviar;
}

function enviar(){
	var enviar = true;

	if(!codigoProducto(document.formulario.codigo.value)){
		enviar = false;
		document.formulario.errcodigo.value = "El código del producto no tiene el formato correcto";
	}else{
		document.formulario.errcodigo.value = "";
	}

	if(!descripcionProducto(document.formulario.descripcion.value)){
		enviar = false;
		document.formulario.errdescripcion.value = "La descripcion del producto no tiene el formato correcto";
	}else{
		document.formulario.errdescripcion.value = "";
	}
	
	if(!precioProducto(document.formulario.precio.value)){
		enviar = false;
		document.formulario.errprecio.value = "El precio del producto no tiene el formato correcto";
	}else{
		document.formulario.errprecio.value = "";
	}
	
	if(!nombreEmpresa(document.formulario.empresa.value)){
		enviar = false;
		document.formulario.errempresa.value = "El nombre de la empresa no tiene el formato correcto";
	}else{
		document.formulario.errempresa.value = "";
	}
	
	if(!codEmpresa(document.formulario.codempre.value)){
		enviar = false;
		document.formulario.errcodempre.value = "El codigo de empresa no tiene el formato correcto";
	}else{
		document.formulario.errcodempre.value = "";
	}
	
	if(!unidadesDisponibles(document.formulario.unidades.value)){
		enviar = false;
		document.formulario.errunidades.value = "El numero de unidades disponibles no tiene el formato correcto";
	}else{
		document.formulario.errunidades.value = "";
	}
	
	if(!familiaProducto(document.formulario.familia.value)){
		enviar = false;
		document.formulario.errfamilia.value = "La familia del producto no tiene el formato correcto";
	}else{
		document.formulario.errfamilia.value = "";
	}
	
	if(!empresaTransporte(document.formulario.transporte.value)){
		enviar = false;
		document.formulario.errtransporte.value = "La empresa de transporte no tiene el formato correcto";
	}else{
		document.formulario.errtransporte.value = "";
	}
	
	if(!direccionEmpresa(document.formulario.direccion.value)){
		enviar = false;
		document.formulario.errdireccion.value = "La direccion de la empresa no tiene el formato correcto";
	}else{
		document.formulario.errdireccion.value = "";
	}
	
	if(!localidadEmpresa(document.formulario.localidad.value)){
		enviar = false;
		document.formulario.errlocalidad.value = "La localidad de la empresa no tiene el formato correcto";
	}else{
		document.formulario.errlocalidad.value = "";
	}

	return enviar;
}