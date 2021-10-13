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
		if(cp.match(/[1-9]/i)){
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

window.primero.nombre.onkeypress = comprobarCaracteres;
window.primero.apellidos.onkeypress = comprobarCaracteres;
window.primero.localidad.onkeypress = comprobarCaracteres;

function comprobarCaracteres(event){
	var x = event.key;
	if(!esLetra(x) && x != " "){
		return false;
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

document.primero.onreset = limpiar;

function limpiar(){
	document.primero.img_aficion.src = "";
	document.primero.imgprovincia.src = "";
	intervalImagenes = [];
}

document.primero.onsubmit = enviar;

function enviar(){
	return esNif(document.primero.nif.value)
	&& nombreValido(document.primero.nombre.value)
	&& apellidoValido(document.primero.apellidos.value);
}

function esNif (nif) {
	var caracterControl = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
	var letrasControl = ["X","Y","Z","L","K","M"];
	if(nif.length == 9){
		if(esLetra(nif[0]) && esLetra(nif[8])){
			var nums = nif.substring(1,8);
			if(letrasControl.includes(nif[0]) && caracterControl.includes(nif[8]) && nums.match(/[1-9]/i)){
				nums = letrasControl.indexOf(nif[0]) + nums;
				console.log(nums);
				return caracterControl[nums%23] == nif[8];
			}
			return false;
		}else if(esLetra(nif[8])){
			var nums = nif.substring(0,8);
			if(nums.match(/[1-9]/i)){
				return caracterControl[nums%23] == nif[8];
			}
			return false;
		}
		return false;
	}
	return false;
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