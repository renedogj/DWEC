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

function esSigno(signo,signos){
	signos = signos.split("");
	return signos.includes(signo)
}

function comprobarRazonSocial(cadena){
	for(var i = 0; i < cadena.length; i++){
		if(i == 0){
			if(!esLetra(cadena[i])){
				return false;
			}
		}else if(i == cadena.length-1){
			if(!esLetra(cadena[i]) && !esDigito(cadena[i]) && !esSigno(cadena[i],".")){
				return false;
			}
		} else if(!esLetra(cadena[i]) && !esDigito(cadena[i]) && !esSigno(cadena[i],"ªº-.")){
			return false;
		}
	}
	return true;
}

function comprobarCodigoEmpresa(codigo){
	if(codigo.length >= 5 && codigo.length <= 10){
		for(var i = 0; i < codigo.length; i++){
			if(!esLetra(codigo[i]) && !esDigito(codigo[i])){
				return false;
			}
		}
		return true;
	}
	return false;
}

function comprobarDireccion(direccion){
	for(var i = 0; i < direccion.length; i++){
		if(i == 0){
			if(!esLetra(direccion[i])){
				return false;
			}
		}else if(i == direccion.length-1){
			if(!esLetra(direccion[i]) && !esDigito(direccion[i])){
				return false;
			}
		}else if(!esLetra(direccion[i]) && !esDigito(direccion[i]) && !esSigno(direccion[i],"ªº-/.")){
			return false;
		}
	}
	return true;
}

function comprobarLocalidad(localidad){
	for(var i = 0; i < localidad.length; i++){
		if(i == 0 || i == localidad.length-1){
			if(!esLetra(localidad[i])){
				return false;
			}
		}else if(!esLetra(localidad[i]) && !esSigno(localidad[i]," ")){
			return false;
		}
	}
	return true;
}
var provincias = ["Araba/Álava","Albacete","Alicante/Alacant","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón/Castelló","Ciudad Real","Córdoba","A Coruña","Cuenca","Gerona","Granada","Guadalajara","Guipúzcoa","Huelva","Huesca","Jaén","León","Lérida","La Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Orense","Asturias","Palencia","Las Palmas","Pontevedra","Salamanca","Santa Cruz de Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia/València","Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"];

function comprobarCodigoPostal(codigoPostal){
	if(codigoPostal >= 1000 && codigoPostal <= 52999){
		asignarCodigoPostal(codigoPostal.toString());
	}
}

function asignarCodigoPostal(cp){
	console.log(typeof cp);
	if(cp != null){
		if(esDigito(cp)){
			if(cp.length >= 2){
				provincia = provincias[parseInt(cp.substring(0,2))-1];
				document.primero.provincia.value = provincia;
				console.log(provincia);
			}
		}
	}
}

function comprobarTelefono(telefono){
	return telefono.length == 9 && comprobarDigitos(telefono) && (telefono[0] == 9 || telefono[0] == 6 || telefono[0] == 7);
}

function comprobarFax(fax){
	return fax.length == 9 && comprobarDigitos(fax) && fax[0] == 9;
}