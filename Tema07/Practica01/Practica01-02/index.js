var inputNombre = document.getElementById("inputNombre");
var inputApellidos = document.getElementById("inputApellidos");
var inputModulo = document.getElementById("inputModulo");
var inputNota = document.getElementById("inputNota");
var bttnObtenerNota = document.getElementById("bttnObtenerNota");

bttnObtenerNota.addEventListener("click",function() {
	if(valorValido(inputNombre) && valorValido(inputApellidos) && valorValido(inputModulo)){
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				inputNota.value = this.responseText;
			}
		};

		xhttp.open("GET", "generarNota.php");
		xhttp.send();
	}else{
		alert("Completa los datos del formulario");
	}
});

function valorValido(input){
	return input.value != null && input.value != "";
}