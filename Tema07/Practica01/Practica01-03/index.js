var inputNombre = document.getElementById("inputNombre");
var inputApellidos = document.getElementById("inputApellidos");
var inputModulo = document.getElementById("inputModulo");
var inputNota = document.getElementById("inputNota");
var bttnObtenerNota = document.getElementById("bttnObtenerNota");

bttnObtenerNota.addEventListener("click",function() {
	if(valorValido(inputNombre) && valorValido(inputApellidos) && valorValido(inputModulo) && valorValido(inputNota)){
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				inputNota.value = this.responseText;
			}
		};

		xhttp.open("POST", "obtenerNota.php");
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("nombre="+inputNombre.value+"&nota="+inputNota.value);
	}else{
		alert("Completa los datos del formulario");
	}
});

function valorValido(input){
	return input.value != null && input.value != "";
}