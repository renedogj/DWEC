var provincias = ["Araba/Álava",
"Albacete",
"Alicante/Alacant",
"Almería",
"Ávila",
"Badajoz",
"Baleares",
"Barcelona",
"Burgos",
"Cáceres",
"Cádiz",
"Castellón/Castelló",
"Ciudad Real",
"Córdoba",
"A Coruña",
"Cuenca",
"Gerona",
"Granada",
"Guadalajara",
"Guipúzcoa",
"Huelva",
"Huesca",
"Jaén",
"León",
"Lérida",
"La Rioja",
"Lugo",
"Madrid",
"Málaga",
"Murcia",
"Navarra",
"Orense",
"Asturias",
"Palencia",
"Las Palmas",
"Pontevedra",
"Salamanca",
"Santa Cruz de Tenerife",
"Cantabria",
"Segovia",
"Sevilla",
"Soria",
"Tarragona",
"Teruel",
"Toledo",
"Valencia/València",
"Valladolid",
"Vizcaya",
"Zamora",
"Zaragoza",
"Ceuta",
"Melilla"];

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

document.primero.provin.checked	= mostrarImagenProvincia;

function mostrarImagenProvincia() {
	console.log("AAA");
	console.log(this.value);
	document.primero.imgprovincia.src = this.value;
}

document.primero.viajar.onchange = añadirImgAficion;
document.primero.leer.onchange = añadirImgAficion;
document.primero.musica.onchange = añadirImgAficion;
document.primero.cine.onchange = añadirImgAficion;
document.primero.deporte.onchange = añadirImgAficion;
document.primero.cena.onchange = añadirImgAficion;

arryImgAficiones = [];

function añadirImgAficion(){
	arryImgAficiones.push("imagenes/" + this.value + ".jpg");
	//console.log(arryImgAficiones.length);
	//setInterval(alternarImagenes(),1000);
}

var contador = 0;
setInterval(function (){
	if(arryImgAficiones.length > 0){
		if(contador == arryImgAficiones.length-1){
			contador = 0;
		}else{
			contador++;
		}
		document.primero.img_aficion.src = arryImgAficiones[contador];
	}
},1000);

//window.onload = bienvenida;

function bienvenida(){
	alert("Bienvenido!!!");
}