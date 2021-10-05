function validar(){
	var direccion = document.formulario.direccion.value;
	document.formulario.mensaje.value = comprobarDireccion(direccion);
}

function comprobarDireccion(direccion){
	direccion = direccion.trim();
	if(direccion.length >= 8 && direccion.length <= 42){
		if(esLetra(direccion[0]) && (esLetra(direccion[direccion.length-1]) || esDigito(direccion[direccion.length-1]))){
			if(comprobarCaracteres(direccion.substring(1,direccion.length-2))){
				return true;
			}
			return false;
		}
		return false;
	}
	return false;	
}

function esLetra(letra){
	letra = letra.toUpperCase();
	letra = letra.charCodeAt(0);
	return (letra > 64 && letra < 91) || letra == 209 
		|| letra == 193 || letra == 201 || letra == 205 
		|| letra == 211 || letra == 218 || letra == 220;
}

function comprobarCaracteres(cadena){
	var valido = true;
	for(var i = 0;i < cadena.length; i++){
		if(esLetra(cadena[i])){
			valido = true;
		}else{
			if(esDigito(cadena[i])){
				valido = true
			}else{
				if(esSigno(cadena[i])){
					valido = true;
				}else {
					return false;
				}
			}
		}	
	}
	return valido;
}

function esDigito(digito){
	return digito.match(/[1-9]/i);
}

function esSigno(signo){
	return signo == "º" || signo == "ª" || signo == "/" || signo == "-";
}

document.formulario.boton.onclick = validar;