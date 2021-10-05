function calcular (){
	var fecha = document.formulario.fecha.value;
	document.formulario.mensaje.value = comprobar(fecha);
}

function comprobar(fecha){
	fecha = fecha.split("/");
	console.log(fecha[0].type);
	return diaMesValido(fecha[0].toString()) && diaMesValido(fecha[1].toString()) && añoValido(fecha[2].toString());
}

function diaMesValido(diaMes){
	return diaMes.length == 1 || diaMes.length == 2;
}

function añoValido(año){
	return año.length == 4;
}

document.formulario.boton.onclick = calcular;