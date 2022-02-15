var selectMarca = document.getElementById("selectMarca");
var selectElectrodomestico = document.getElementById("selectElectrodomestico");
var inputAncho = document.getElementById("inputAncho");
var inputAlto = document.getElementById("inputAlto");
var inputFondo = document.getElementById("inputFondo");

cargarDesplegables();

//selectMarca.addEventListener("change",cargarPrecios);
//selectElectrodomestico.addEventListener("change",cargarPrecios);

function cargarDesplegables(){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const respuesta = JSON.parse(this.responseText);
			const marcas = respuesta.marcas;
			const electrodomesticos = respuesta.electrodomesticos;

			for(let marca of marcas){
				let option = document.createElement("option");
				option.value = marca;
				option.append(document.createTextNode(marca));
				selectMarca.append(option);
			}

			for(let electrodomestico of electrodomesticos){
				let option = document.createElement("option");
				option.value=electrodomestico;
				option.append(document.createTextNode(electrodomestico));
				selectElectrodomestico.append(option);
			}
		}
	};

	xhttp.open("POST", "cargarDesplegables.php");
	xhttp.send();
}
