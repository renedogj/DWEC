function calcular (){
	var cadena = document.formulario.cadena.value;
	var subcadena = document.formulario.subcadena.value
	document.formulario.mensaje.value = contarSubcadenas(cadena,subcadena);
}

function contarSubcadenas(cadena,subcadena){
	cadena.toLowerCase();
	subcadena.toLowerCase();
	contador = 0;
	while(cadena.includes(subcadena)){
		cadena.indexOf(subcadena);
		cadena = cadena.slice(cadena.indexOf(subcadena)+subcadena.length);
		contador++;
	}
	return contador;
}

document.formulario.boton.onclick = calcular;