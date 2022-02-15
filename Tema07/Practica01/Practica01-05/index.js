var selectMarca = document.getElementById("selectMarca");
var selectDimension = document.getElementById("selectDimension");
var inputPrecio = document.getElementById("inputPrecio");

cargarDesplegables();

selectMarca.addEventListener("change",cargarPrecios);
selectDimension.addEventListener("change",cargarPrecios);

function cargarDesplegables(){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const respuesta = this.responseXML;
			const marcas = respuesta.getElementsByTagName("marca");
			const dimensiones = respuesta.getElementsByTagName("dimension");

			for(let marca of marcas){
				let option = document.createElement("option");
				option.value=marca.innerHTML;
				option.append(document.createTextNode(marca.innerHTML));
				selectMarca.append(option);
			}

			for(let dimension of dimensiones){
				let option = document.createElement("option");
				option.value=dimension.innerHTML;
				option.append(document.createTextNode(dimension.innerHTML));
				selectDimension.append(option);
			}
		}
	};

	xhttp.open("POST", "cargarDesplegables.php");
	xhttp.send();
}

function cargarPrecios(){
	var datos = new FormData();
	datos.append("marca",selectMarca.value);
	datos.append("dimension",selectDimension.value);

	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			inputPrecio.value = this.responseText;
		}
	};

	xhttp.open("POST", "cargarPrecios.php");
	xhttp.send(datos);
}