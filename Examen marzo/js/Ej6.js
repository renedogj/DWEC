var velocidad = document.getElementById("velo");
var rozamiento = document.getElementById("roza");
var distancia = document.getElementById("dis");


document.getElementById("obtener").addEventListener("click",function(){
	if(velocidad.value != "" && rozamiento.value != ""){
		var datos = {Velocidad:parseInt(velocidad.value), Rozamiento:parseInt(rozamiento.value)};
		datosJSON = JSON.stringify(datos);
		
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
				const respuesta = JSON.parse(this.responseText);
				distancia.value = respuesta["Distancia"];

			}
		};

		xhttp.open("POST", "php/ejercicio06.php");
		xhttp.setRequestHeader("Content-Type","application/json");
		xhttp.send(datosJSON);
	}
});