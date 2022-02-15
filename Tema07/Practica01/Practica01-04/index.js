var inputNombre = document.getElementById("inputNombre");
var inputApellidos = document.getElementById("inputApellidos");
var inputPuesto = document.getElementById("inputPuesto");
var inputSalario = document.getElementById("inputSalario");
var bttnObtenerNota = document.getElementById("bttnObtenerNota");

bttnObtenerNota.addEventListener("click",function() {
	if(valorValido(inputNombre) && valorValido(inputApellidos) && valorValido(inputPuesto)){
		var datos = new FormData();
		datos.append("nombre",inputNombre.value);
		datos.append("apellidos",inputApellidos.value);
		datos.append("puesto",inputPuesto.value);

		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				inputSalario.value = this.responseText;
			}
		};

		xhttp.open("POST", "obtenerSalario.php");
		xhttp.send(datos);
	}else{
		alert("Completa los datos del formulario");
	}
});

function valorValido(input){
	return input.value != null && input.value != "";
}