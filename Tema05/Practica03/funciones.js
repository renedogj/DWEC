function range(start,end,step){
	if(step == null){
		step = 1;
	}
	var range = [];
	var typeofStart = typeof start;
	var typeofEnd = typeof end;
	if(typeofStart == typeofEnd){
		if(typeofStart == "string"){
			for(var i = start.charCodeAt(0); i <= end.charCodeAt(0); i = i + step){
				range.push(String.fromCharCode(i));
			}
			return range;
		}else if(typeofStart == "number"){
			for(var i = start; i <= end; i = i + step){
				range.push(i);
			}
			return range;
		}
	}
}

function comprobarDigitos (cadena) {
	for(var i = 0; i < cadena.length; i++){
		if(!esDigito(cadena[i])){
			return false;
		}
	}
	return true;
}

function esLetra(letra){
	letra = letra.toUpperCase();
	letra = letra.charCodeAt(0);
	return (letra > 64 && letra < 91) || letra == 209 
	|| letra == 193 || letra == 201 || letra == 205 
	|| letra == 211 || letra == 218 || letra == 220;
}

function esDigito(digito){
	return digito.match(/[1-9]/i);
}

function esSigno(signo){
	return signo == "," || signo == "." || signo == "º";
}