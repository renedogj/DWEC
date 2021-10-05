function calcular (){
	var texto = document.formulario.cadena.value;
    numeroVocales = texto.match(/[aeiou]/gi).length;
	document.formulario.vocales.value = numeroVocales;
	document.formulario.consonantes.value = texto.length - numeroVocales;
}

document.formulario.boton.onclick = calcular;