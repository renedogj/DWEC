function esLetra(letra){
	letra = letra.toUpperCase();
	letra = letra.charCodeAt(0);
	return (letra > 64 && letra < 91) || letra == 209 
	|| letra == 193 || letra == 201 || letra == 205 
	|| letra == 211 || letra == 218 || letra == 220;
}

function esDigito(digito){
	return !isNaN(digito);
}

function esSigno(signo,signos){
	signos = signos.split("");
	return signos.includes(signo)
}

function rangoEsLetra(rango){
	var valido = true;
	for(var i = 0;i < rango.length; i++){
		if(!esLetra(rango[i])){
			return false;
		}	
	}
	return valido;
}

function comprobarRangoLetrasSignos(rango,signos){
	var valido = true;
	for(var i = 0;i < rango.length; i++){
		if(!esLetra(rango[i]) && !esSigno(rango[i],signos)){
			return false;
		}
	}
	return valido;
}

function comprobarRangoLetrasDigitos(rango){
	var valido = true;
	for(var i = 0;i < rango.length; i++){
		if(!esLetra(rango[i]) && !esDigito(rango[i])){
			return false;
		}
	}
	return valido;
}

function comprobarRangoLetrasDigitosSignos(rango,signos){
	var valido = true;
	for(var i = 0;i < rango.length; i++){
		if(!esLetra(rango[i]) && !esDigito(rango[i]) && !esSigno(rango[i],signos)){
			return false;
		}
	}
	return valido;
}

function codigoISBN(codigoISBN){
	if(codigoISBN.length >= 10 && codigoISBN.length <= 13){
		if(!isNaN(codigoISBN)){
			return true;
		}
	}
	return false;
}

function tituloLibro(titulo){
	var longitud = titulo.length;
	if(longitud >= 7 && longitud <= 30){
		if(rangoEsLetra(titulo.substring(0,2))){
			if(rangoEsLetra(titulo.substring(longitud-4,longitud))){
				if(comprobarRangoLetrasDigitosSignos(titulo," -")){
					return true;
				}
			}
		}
	}
	return false;
}

function precioLibro(precio){
	if(esDigito(precio)){
		if(precio >= 10){
			if((Math.round(precio*100)/100) == precio){
				return true;
			}
		}
	}
	return false;
}

function fechaPublicacion(fecha){
	if(fecha.includes("-")){
		arrayFecha = fecha.split("-");
	}else if(fecha.includes("/")){
		arrayFecha = fecha.split("/");
	}else {
		return false;
	}

	if(arrayFecha.length == 3){
		if(arrayFecha[0].length != 2 || !esDigito(arrayFecha[0])){
			return false;
		}
		if(arrayFecha[1].length != 2 || !esDigito(arrayFecha[1])){
			return false;
		}
		if(arrayFecha[2].length != 4 || !esDigito(arrayFecha[4])){
			if(arrayFecha[2] < 1868 || arrayFecha[2] > 2100){
				return false;
			}
		}
		return true;
	}
	return false;
}

function comprobarEditorial(editorial){
	longitud = editorial.length;
	if(longitud >= 12 && longitud <= 38){
		if(rangoEsLetra(editorial.substring(0,4))){
			if(esLetra(editorial[longitud-1]) || esSigno(editorial[longitud-1],".")){
				if(comprobarRangoLetrasSignos(editorial," .")){
					return true;
				}
			}
		}
	}
	return false;
}

function comprobarAutor(autor) {
	longitud = autor.length;
	if(longitud >= 6 && longitud <= 23){
		if(rangoEsLetra(autor.substring(0,3))){
			if(rangoEsLetra(autor.substring(longitud-3,longitud))){
				if(comprobarRangoLetrasSignos(autor," -ªº")){
					return true;
				}
			}
		}
	}
	return false;
}

function comprobarCodLibro(codLibro){
	longitud = codLibro.length;
	var inicioPosible = ["ABC","CDE","FGH","IJK","LMN"];
	if(longitud >= 12 && longitud <= 15){
		inicio = codLibro.substring(0,3);
		if(inicioPosible.includes(inicio)){
			fin = codLibro.substring(longitud-5,longitud);
			if(comprobarRangoLetrasDigitos(fin)){
				if(codLibro[longitud-6] == "-"){
					medio = codLibro.substring(3,longitud-6)
					if(rangoEsLetra(medio)){
						return true;
					}
				}
			}
		}
	}
	return false;
}

function comprobarEstiloLibro(estilo){
	var estilosPosiblies = ["novela","poesía","narrativa","diccionario","gramática"]
	estilo = estilo.toUpperCase();
	return estilosPosiblies.includes(estilo);
}

function comprobarNumPaginas(numPag){
	return numPag >= 75 && numPag <= 9999;
}


function comprobarFormatos(selecion){
	let numSelecionados = 0;
	for(let x of selecion){
		if(x.checked){
			numSelecionados++;
		}
	}
	return numSelecionados == 1;
}

function comprobarIdiomas(selecion){
	let numSelecionados = 0;
	for(let x of selecion){
		if(x.selected){
			numSelecionados++;
		}
	}
	return numSelecionados >= 2;
}

function comprobarPaises(seleccionados){
	let numSelecionados = 0;
	for(let x of seleccionados){
		if (x.type == "checkbox" && x.checked){
			numSelecionados++;
		}
	}
	return numSelecionados >= 5;
}