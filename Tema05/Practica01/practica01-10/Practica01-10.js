function validar(){
	var url = document.formulario.url.value;
	document.formulario.mensaje.value = comprobarurl(url);

}
function comprobarurl(url){
	url = url.trim();
	if(url.startsWith("http://")){
		url = url.replace("http://", "");
	}else if(url.startsWith("https://")){
		url = url.replace("https://", "");
	}
	if (url.length > 0) {
		if(url.startsWith("www.")){
			if(esLetra(url[4])){
				if(comprobarCaracteres(url.substring(6, url.lastIndexOf(".")-1))){
					if(esLetra(url[url.lastIndexOf(".")-1])|| url[url.lastIndexOf(".")-1].match(/[1-9]/i)){
						if(url.substring(url.lastIndexOf(".")+1,url.length).length > 1 
							&& url.substring(url.lastIndexOf(".")+1,url.length).length <= 4){
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
	return signo == "." || signo == "_" || signo == "-";
}

document.formulario.boton.onclick = validar;