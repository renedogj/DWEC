function validar(){
	var localidad = document.formulario.localidad.value;
	document.formulario.mensaje.value = comprobarLocalidad(localidad);
}

function comprobarLocalidad(localidad){
	localidad = localidad.trim();
	if(localidad.length >= 7 && localidad.length <=35){
		if(esLetra(localidad[0]) && esLetra(localidad[1]) && esLetra(localidad[2])){
			if(esLetra(localidad[localidad.length-2]) && esLetra(localidad[localidad.length-1])){
				if(comprobarCaracteres(localidad.substring(4,localidad.length-2))){
					return true;
				}
				return false;
			}
			return false;
		}
		return false;
	}
	return false;	
}

function comprobarCaracteres(cadena){
	var valido = true;
	for(var i = 0;i < cadena.length; i++){
		if(esLetra(cadena[i])){
			valido = true;
		}else{
			valido = (cadena[i] == " ");
		}	
	}
	return valido;
}

function esLetra(letra){
	letra = letra.toUpperCase();
	letra = letra.charCodeAt(0);
	return (letra > 64 && letra < 91) || letra == 209 
		|| letra == 193 || letra == 201 || letra == 205 
		|| letra == 211 || letra == 218 || letra == 220;
}

function esSigno(signo){
	return signo == "." || signo == "_" || signo == "-";
}

document.formulario.boton.onclick = validar;