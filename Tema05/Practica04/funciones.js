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

function comprobarModulo(modulo){
	if(modulo == 10){
		modulo = 1;
	}else if(modulo == 11){
		modulo = 0;
	}
	return modulo;
}

function comprobarRazonSocial(cadena){
	return /^[A-z][A-z\dªº\-.]+[A-z\d.]$/.test(cadena);
}

function comprobarCodigoEmpresa(codigo){
	return /[A-z\d]{5,10}/.test(codigo);
}

function comprobarDireccion(direccion){
	return /^[A-z][A-z\d]+[A-z\dªº\-/.]$/.test(direccion);
}

function comprobarLocalidad(localidad){
	return /^[A-z][A-z ]+[A-z]$/.test(localidad);
}

var provincias = ["Araba/Álava","Albacete","Alicante/Alacant","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón/Castelló","Ciudad Real","Córdoba","A Coruña","Cuenca","Gerona","Granada","Guadalajara","Guipúzcoa","Huelva","Huesca","Jaén","León","Lérida","La Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Orense","Asturias","Palencia","Las Palmas","Pontevedra","Salamanca","Santa Cruz de Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia/València","Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"];

function comprobarCodigoPostal(codigoPostal){
	if(codigoPostal >= 1000 && codigoPostal <= 52999){
		asignarCodigoPostal(codigoPostal.toString());
	}
}

function asignarCodigoPostal(){
	var cp = document.primero.cp.value;
	if(cp != null){
		if(/^([\d]+){2}$/.test(cp)){
			provincia = provincias[parseInt(cp.substring(0,2))-1];
			document.primero.provincia.value = provincia;
		}
	}
}

function comprobarTelefono(telefono){
	return /^[967][1-9]{8}$/.test(telefono);
}

function comprobarFax(fax){
	return /^[9][1-9]{8}$/.test(fax);
}

function comprobarFecha(fecha) {
	if(fecha.includes("-")){
		arrayFecha = fecha.split("-");
	}else if(fecha.includes("/")){
		arrayFecha = fecha.split("/");
	}else {
		return false;
	}

	if(arrayFecha.length == 3){
		if(arrayFecha[0].length != 1 && arrayFecha[0].length != 2){
			return false;
		}
		if(arrayFecha[1].length != 1 && arrayFecha[1].length != 2){
			return false;
		}
		if(arrayFecha[2].length != 2 && arrayFecha[2].length != 4){
			return false;
		}
		return true;
	}
	return false;
}

function comprobarComunidades(comunidades) {
	var contador = 0;
	for (var i = 0; i < comunidades.length; i++) {
		if (comunidades[i].selected) {
			contador++;
		}
	}
	if (contador >= 2){
		return true;
	}
	return false;
}

function comprobarCodBancoSucursal (cod) {
	return /^[\d]{4}$/.test(cod);
}

function comprobarCodControl(codControl,banco,sucursal,cuenta){
	return /^[\d]{2}$/.test(codControl) && codControl == codigosControl(banco,sucursal,cuenta);
}

function comprobarNumCuenta(cuenta){
	return /^[\d]{10}$/.test(cuenta);
}

function comprobarCheckbox(checkbox){
	let numSelecionados = 0;
	for(let x of checkbox){
		if(x.checked){
			numSelecionados++;
		}
	}
	return numSelecionados >= 1;
}

function comprobarSeleccion(selecion){
	let numSelecionados = 0;
	for(let x of selecion){
		if(x.checked){
			numSelecionados++;
		}
	}
	return numSelecionados == 1;
}