function calcularNumerosPrimos () {
	let primos = new Array();
	var i = 2
	while (primos.length < 100) {
		let primo = true;
		for(j=2;j<i;j++){
			if(primo) {
				primo = i%j != 0;
			}
		}
		if(primo)
			primos.push(i);
		i++;
	}
	document.formulario.textarea.value = primos.join(" | ");
}
document.forms.formulario.boton.onclick = calcularNumerosPrimos;
