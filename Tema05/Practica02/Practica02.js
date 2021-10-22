var provincias = ["Araba/Álava","Albacete","Alicante/Alacant","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón/Castelló","Ciudad Real","Córdoba","A Coruña","Cuenca","Gerona","Granada","Guadalajara","Guipúzcoa","Huelva","Huesca","Jaén","León","Lérida","La Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Orense","Asturias","Palencia","Las Palmas","Pontevedra","Salamanca","Santa Cruz de Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia/València","Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"];

document.primero.nif.onfocus = colorFondoRojo;
document.primero.nombre.onfocus = colorFondoRojo;
document.primero.apellidos.onfocus = colorFondoRojo;
document.primero.domicilio.onfocus = colorFondoRojo;
document.primero.localidad.onfocus = colorFondoRojo;
document.primero.cp.onfocus = colorFondoRojo;
document.primero.provincia.onfocus = colorFondoRojo;

document.primero.nif.onblur = colorFondoBlanco;
document.primero.nombre.onblur = colorFondoBlanco;
document.primero.apellidos.onblur = colorFondoBlanco;
document.primero.domicilio.onblur = colorFondoBlanco;
document.primero.localidad.onblur = colorFondoBlanco;
document.primero.cp.onblur = colorFondoBlanco;
document.primero.provincia.onblur = colorFondoBlanco;

document.primero.cp.onchange = comprobarCodigoPostal;

function colorFondoRojo () {
	this.style.backgroundColor = "red";
}

function colorFondoBlanco () {
	this.style.backgroundColor = "white";
}

function comprobarCodigoPostal(){
	cp = document.primero.cp.value;
	if(cp != null){
		if(esDigito(cp)){
			if(cp.length >= 2){
				provincia = provincias[parseInt(cp.substring(0,2))-1];
				document.primero.provincia.value = provincia;
			}
		}
	}
}

var imagenes = ["imagenes/atena acropoli.jpg","imagenes/lisboa torre belem.jpg","imagenes/Paris Torre Eiffel.jpg","imagenes/roma fontana di trevi.jpg","imagenes/Venecia Plaza San Marcos.jpg"];

document.onkeyup = ponerImagenFondo;

var contadorDeImagenes = 0;
function ponerImagenFondo (event) {
	if(event.keyCode == 114){
		if(contadorDeImagenes == imagenes.length){
			contadorDeImagenes = 0;
		}
		document.primero.style.backgroundImage = "url('"+imagenes[contadorDeImagenes]+"')";
		contadorDeImagenes++;
	}
}

for (var i = 0; i < 4; i++) {
	document.primero.provin[i].onfocus	= mostrarImagenProvincia;
}

function mostrarImagenProvincia() {
	document.primero.imgprovincia.src = "imagenes/" + this.value + ".jpg";
}

document.primero.viajar.onchange = añadirImgAficion;
document.primero.leer.onchange = añadirImgAficion;
document.primero.musica.onchange = añadirImgAficion;
document.primero.cine.onchange = añadirImgAficion;
document.primero.deporte.onchange = añadirImgAficion;
document.primero.cena.onchange = añadirImgAficion;

arrayImgAficiones = [];

function añadirImgAficion(){
	var imagen = "imagenes/" + this.value + ".jpg";
	if(!arrayImgAficiones.includes(imagen)){
		arrayImgAficiones.push(imagen);
	}else{
		arrayImgAficiones.splice(arrayImgAficiones.indexOf(imagen),1);
	}
}

var contador = 0;
var intervalImagenes = setInterval(function (){
	if(arrayImgAficiones.length > 0){
		if(contador == arrayImgAficiones.length-1){
			contador = 0;
		}else{
			contador++;
		}
		document.primero.img_aficion.src = arrayImgAficiones[contador];
	}
},1000);

window.onload = bienvenida;

function bienvenida(){
	alert("Bienvenido!!!");
}

window.primero.nombre.onkeypress = comprobarCaracter;
window.primero.apellidos.onkeypress = comprobarCaracter;
window.primero.localidad.onkeypress = comprobarCaracter;

function comprobarCaracter(event){
	var x = event.key;
	if(!esLetra(x) && x != " "){
		return false;
	}
	return true;
}

document.primero.onreset = limpiar;

function limpiar(){
	document.primero.img_aficion.src = "";
	document.primero.imgprovincia.src = "";
	intervalImagenes = [];
}

document.primero.onsubmit = enviar;

function enviar(){
	return esNif(document.primero.nif.value) == 1
	&& nombreValido(document.primero.nombre.value)
	&& apellidoValido(document.primero.apellidos.value)
	&& domicilioValido(document.primero.domicilio.value)
	&& localidadValido(document.primero.localidad.value)
	&& codigoPostalValido(document.primero.cp.value);
}

function esNif (nif) {
	var caracterControl = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
	var letrasControl = ["X","Y","Z","L","K","M"];
	if(nif.length == 9){
		if(esLetra(nif[0]) && esLetra(nif[8])){
			var nums = nif.substring(1,8);
			if(letrasControl.includes(nif[0]) && caracterControl.includes(nif[8]) && esDigito(nums)){
				nums = letrasControl.indexOf(nif[0]) + nums;
				if(caracterControl[nums%23] == nif[8]){
					return 1;
				}else{
					return 2;
				}
			}
			return 0;
		}else if(esLetra(nif[8])){
			var nums = nif.substring(0,8);
			if(comprobarDigitos(nums)){
				if(caracterControl[nums%23] == nif[8]){
					return 1;
				}else{
					return 2;
				}
			}
			return 0;
		}
		return 0;
	}else if(nif.length >= 6  && nif.length <= 8){
		if(comprobarDigitos(nif)){
			if(nif >= 100000){
				return 3;
			}
			return 0;
		}
		return 0;
	}
	return 0;
}

function nombreValido(nombre){
	if(nombre.length >= 6 && nombre.length <= 20){
		cadena = nombre.substring(0,3);
		for(var i = 0;i < cadena.length; i++){
			if(!esLetra(cadena[i])){
				return false;
			}			
		}
		cadena = nombre.substring(nombre.length-2,nombre.length);
		for(var i = 0;i < cadena.length; i++){
			if(!esLetra(cadena[i])){
				return false;
			}			
		}
		return true;
	}
	return false;
}

function apellidoValido(apellido){
	if(apellido.length >= 12 && apellido.length <= 35){
		cadena = apellido.substring(0,4);
		for(var i = 0;i < cadena.length; i++){
			if(!esLetra(cadena[i])){
				return false;
			}			
		}
		cadena = apellido.substring(apellido.length-5,apellido.length);
		for(var i = 0;i < cadena.length; i++){
			if(!esLetra(cadena[i])){
				return false;
			}			
		}
		return true;
	}
	return false;
}

function domicilioValido(domicilio){
	if(domicilio.length >= 15 && domicilio.length <= 40){
		cadena = domicilio.substring(0,3);
		for(var i = 0;i < cadena.length; i++){
			if(!esLetra(cadena[i])){
				return false;
			}			
		}
		cadena = domicilio.substring(3,domicilio.length-1);
		if(comprobarCaracteres(cadena)){
			return false;
		}
		
		if(!esLetra(domicilio[domicilio.length-1]) && !esDigito(domicilio[domicilio.length-1])){
			return false;
		}			
		return true;
	}
	return false;
}

function localidadValido(localidad){
	if(localidad.length >= 10 && localidad.length <= 30){
		cadena = localidad.substring(0,3);
		for(var i = 0;i < cadena.length; i++){
			if(!esLetra(cadena[i])){
				return false;
			}			
		}
		cadena = localidad.substring(localidad.length-3,localidad.length);
		for(var i = 0;i < cadena.length; i++){
			if(!esLetra(cadena[i])){
				return false;
			}			
		}			
		return true;
	}
	return false;
}

function codigoPostalValido(codigoPostal){
	for(var i = 0;i < codigoPostal.length; i++){
		if(!esDigito(codigoPostal[i])){
			return false;
		}			
	}
	codigoPostal = parseInt(codigoPostal);
	return codigoPostal > 1000 && codigoPostal <= 52999;
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
	return signo == "," || signo == "." || signo == "º";
}