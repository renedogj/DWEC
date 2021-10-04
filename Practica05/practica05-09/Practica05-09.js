function validar(){
	var email = document.formulario.email.value;
	document.formulario.mensaje.value = comprobarEmail(email);

}
function comprobarEmail(email){
	email = email.trim();
	if (email.length > 0) {
		if (esLetra(email.charAt(0))) {
			if (email.includes("@") && email.includes(".")) {
				if(comprobarCaracteres(email.substring(1,email.indexOf("@")-1))){
					if(esLetra(email[email.indexOf("@")-1]) || esSigno (email[email.indexOf("@")-1])){
						if(esLetra(email[email.indexOf("@")+1])){
							if(comprobarCaracteres(email.substring(email.indexOf("@")+1,email.lastIndexOf(".")-1))){
								if(esLetra(email[email.lastIndexOf(".")-1]) || esSigno(email[email.lastIndexOf(".")-1])){
									if(email.substring(email.lastIndexOf(".")+1,email.length).length > 1 
									&& email.substring(email.lastIndexOf(".")+1,email.length).length <= 4){
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
					return false;
				}
				return false;
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
			if(!cadena[i].match(/[1-9]/i)){
				valido = true
			}else{
				valido = esSigno(cadena[i]);
			}
		}	
	}
	return valido;
}

function esSigno(signo){
	return signo == "." || signo == "_" || signo == "-";
}

document.formulario.boton.onclick = validar;