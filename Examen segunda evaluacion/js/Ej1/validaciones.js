function validarCodigoProducto(codProducto){
    return (codProducto.length == 7 || codProducto.length == 11);
}

function validarDescripcionProducto(descripcion){
    if(descripcion.length >= 10 && descripcion.length <= 23){
        if(rangoEsLetra(descripcion.substring(0,4)) && esLetra(descripcion[descripcion.length-1])){
            return comprobarRangoLetrasDigitosSignos(descripcion.substring(4,descripcion.length-1)," -");
        }
    }
    return false;
}

function validarfechaAltaEmpresa(fecha){
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
		if(arrayFecha[2].length != 4 || !esDigito(arrayFecha[2])){
			if(arrayFecha[2] < 1930 || arrayFecha[2] > 2022){
				return false;
			}
		}
		return true;
	}
	return false;
}

function validarPrecioProducto(precio){
    let truncPrecio = Math.floor(precio);
    if(truncPrecio > 10){
        return (precio.toString().length <= (truncPrecio.toString().length +3));
    }
    return false;
}

function validarNombreEmpresaDistribucion(nombre){
	return /^[A-z]{3}[A-z .]{10,27}[A-z\d]{1}$/.test(nombre);
}

function validarCodEmpresa(codEmpresa){
	return /^[0-9]{3}[.](ABCE|CADE|FEGU|IJOK|LIMA)[\d]{5,8}[.][A-z\d]{5}$/.test(codEmpresa);
}

function validarDireccionEmpresa(direccion){
	return /^[A-z]{2}[A-z\d.,-ºª\\]{10,28}[A-z\d.]{1}$/.test(direccion);
}

function validarLocalidadEmpresa(localidad){
	return /^[A-z]{5,20}$/.test(localidad);
}

function validarUnidadesMinimas(unidades){
    var regExp = new RegExp("^[\d]{2,4}$");
	return regExp.test(unidades);
}

function validarUnidadesDisponibles(unidades) {
	var regExp = new RegExp("^[\d]{2,7}$");
	return regExp.test(unidades);
}

function validarFamiliaProducto(familia){
	var regExp = new RegExp("^[A-z]{5}[A-z\d -.|]{2,13}[A-z]{3}$");
	return regExp.test(familia);
}

function validarEmpresaTransporte(empresa){
	var regExp = new RegExp("^(SEUR|NACEX|DHL|MRW)$");
	return regExp.test(empresa);
}

function comprobarSelecionIva(selecion){
	let numSelecionados = 0;
	for(let x of selecion){
		if(x.checked){
			numSelecionados++;
		}
	}
	return numSelecionados == 1;
}

function comprobarSectorProduccion(seleccionados){
	let numSelecionados = 0;
	for(let x of seleccionados){
		if (x.type == "checkbox" && x.checked){
			numSelecionados++;
		}
	}
	return numSelecionados >= 1;
}

function comprobarPaises(selecion){
	let numSelecionados = 0;
	for(let x of selecion){
		if(x.selected){
			numSelecionados++;
		}
	}
	return numSelecionados >= 3;
}

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

function comprobarRangoLetrasDigitosSignos(rango,signos){
	var valido = true;
	for(var i = 0;i < rango.length; i++){
		if(!esLetra(rango[i]) && !esDigito(rango[i]) && !esSigno(rango[i],signos)){
			return false;
		}
	}
	return valido;
}