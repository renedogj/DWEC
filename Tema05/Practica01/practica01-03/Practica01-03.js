function calcularNumerosPrimos () {
	let primos = new Array();
	var inial = document.formulario.numeroInicial.value;
	var final = document.formulario.numeroFinal.value;

	for(var i = inial; i <= final; i++){
		let primo = true;
		for(j=2;j<i;j++){
			if(primo) {
				primo = i%j != 0;
			}
		}
		if(primo){
			primos.push(i);
			console.log(i);
		}		
	}
	document.formulario.textarea.value = primos.join(" | ");
}
document.forms.formulario.boton.onclick = calcularNumerosPrimos;
