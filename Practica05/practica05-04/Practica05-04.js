function colocarValores (){
	var valorDecimal = parseInt(document.formulario.decimal.value, 10);
	document.formulario.binario.value = binario(valorDecimal);
	document.formulario.octal.value = parseInt(valorDecimal,8);
	document.formulario.hexacimal.value = parseInt(valorDecimal,16);
}

function binario (valorDecimal) {
	let numbinario = 0;
	let aux, i = 1;
	while (valorDecimal != 0) {
		aux = valorDecimal % 2;
		valorDecimal = parseInt(valorDecimal / 2);
		numbinario = numbinario + aux * i;
		i = i * 10;
	}
	return numbinario;
}

document.formulario.boton.onclick = colocarValores;