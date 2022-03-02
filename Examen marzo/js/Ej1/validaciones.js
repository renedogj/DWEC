function validarCodigoExportacion(codExportacion){
	if(codExportacion.length >= 16 || codExportacion <= 29){
		for (var i = 5; i >= 3; i--){
			if(rangoEsLetra(codExportacion.substring(0,i))){
				for (var j = i+6; j >= i; j--){
				if(rangoEsDigito(codExportacion.substring(i,j))){
					if(esSigno(codExportacion[j++],"-?")){
						if(rangoEsSigno(codExportacion.substring(j+2,j+5),"$%&/*")){
							return rangoEsDigito(codExportacion.substring(codExportacion.length-3,codExportacion.length));
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

function validarNombre(nombre){
	var numCaracteres = nombre.length;
	if(numCaracteres >= 7 && numCaracteres <= 13){
		if(comprobarRangoLetrasDigitosSignos(nombre.substring(0,2),"")){
			if(comprobarRangoLetrasDigitosSignos(nombre.substring(numCaracteres-1,numCaracteres),"#")){
				if(comprobarRangoLetrasDigitosSignos(nombre.substring(2,numCaracteres-1)," -.")){
					return true;
				}
			}
		}
	}
	return false;
}

function validarUnidades(unidades){
	let truncUnidades = Math.floor(unidades)
	return (truncUnidades == unidades && unidades > 0);
}

function validarCodigoInterno(codInterno){
	return /^[\d]{4,7}[a-záéíóúüñ]{5,8}([$]|[@]){1}[\d]{2}[a-záéíóúüñ\d]{6}$/i.test(codInterno);
}

function validarDescripcion(descripcion){
	return /^[a-záéíóúüñ]{6}[a-záéíóúüñ\d-$%\/]{5,29}[[a-záéíóúüñ\d,]{2}$/i.test(descripcion);
}

function validarValor(valor){
	return /^([\d]{7})|([\d]{6})|([5-9]{1}[\d]{4})$/.test(valor);
}

function validarCodInternacional(codInternacional){
	var regExp = new RegExp("^[a-záéíóúüñ]{10,17}$");
	return regExp.test(codInternacional);
}

function validarCarecteristicas(caracteristicas){
	var regExp = new RegExp("^[\d]{2,7}$");
	return regExp.test(caracteristicas);
}

function validarFecha(fecha){
	var regExp = new RegExp("^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$");
	return regExp.test(fecha);
}


function comprobarTipoArticulo(selecion){
	let numSelecionados = 0;
	for(let x of selecion){
		if(x.checked){
			numSelecionados++;
		}
	}
	return numSelecionados == 1;
}

function comprobarCiudades(seleccionados){
	let numSelecionados = 0;
	for(let x of seleccionados){
		if (x.type == "checkbox" && x.checked){
			numSelecionados++;
		}
	}
	return numSelecionados >= 2;
}

function comprobarComunidades(selecion){
	let numSelecionados = 0;
	for(let x of selecion){
		if(x.selected){
			numSelecionados++;
		}
	}
	return numSelecionados >= 4;
}



//Funciones auxiliares

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

function rangoEsDigito(rango){
	var valido = true;
	for(var i = 0;i < rango.length; i++){
		if(!esDigito(rango[i])){
			return false;
		}	
	}
	return valido;
}

function rangoEsSigno(rango,signos){
	var valido = true;
	for(var i = 0;i < rango.length; i++){
		if(!esSigno(rango[i],signos)){
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