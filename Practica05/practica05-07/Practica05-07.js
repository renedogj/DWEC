function calcular (){
	var cadena = document.formulario.cadena.value;
	document.formulario.mensaje.value = comprobar(cadena);
}

function comprobar(cadena){
	cadena = cadena.toUpperCase();
	cadena.trim();
	if(esletra(cadena.charCodeAt(0)) && esletra(cadena.charCodeAt(cadena.length-1))){
		if(cadena.length > 3 && cadena.length < 27){
			if(comprobarCaracteres(cadena))
			return true;
		}
	}
	return false;
}

function esletra(letra){
	return (letra > 64 && letra < 91) || letra == 209;
}

function comprobarCaracteres(cadena){
	for(var i = 0; cadena.length;i++){
		
	}

	if(esletra(cadena[i])){
		return true;
	}else{
		if(!cadena[i].match(/[1-9]/i)){
			return true
		}else{
			if(cadena[i] == "º")
		}
	}
}

document.formulario.boton.onclick = calcular;