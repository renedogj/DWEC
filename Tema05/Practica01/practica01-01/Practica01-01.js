function calcularNumerosPrimos () {
	let primos = new Array();

	for(var i = 1; i <= 100; i++){
		let primo = true;
		for(j=2;j<i;j++){
			if(primo) {
				primo = i%j != 0;
			}
		}
		if(primo)
			primos.push(i);
	}
	document.formulario.textarea.value = primos.join(" | ");
	console.log(primos.join(" | "));
}
document.forms.formulario.boton.onclick = calcularNumerosPrimos;
