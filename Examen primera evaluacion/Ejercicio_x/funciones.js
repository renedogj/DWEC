function pentavocalica(palabra){
	var esPentavolica = true;
	vocales = ["a","e","i","o","u"];
	for(let vocal of vocales){
		if(!palabra.includes(vocal)){
			return false;
		}else{
			if(palabra.indexOf(vocal) != palabra.lastIndexOf(vocal)){
				return false;
			}
		}
	}
	return esPentavolica;
}

function anagrama(cadena1,cadena2){
	cadena1 = cadena1.replace(" ","");
	cadena2 = cadena2.replace(" ","");
	if(cadena1.length == cadena2.length){
		arrayCadena1 = cadena1.split().sort();
		arrayCadena2 = cadena2.split().sort();
		esAnagrama = true;
		for (var i = 0; i >= arrayCadena1.length; i++) {
			if(arrayCadena1[i] != arrayCadena2[i]){
				return false
			}
		}
		return true;
	}

	return false;
}