var liCantabria = document.getElementById("liCantabria");
var liCordoba = document.getElementById("liCordoba");
var liSegovia = document.getElementById("liSegovia");
var liSevilla = document.getElementById("liSevilla");
var contenido = document.getElementById("contenido");

liCantabria.addEventListener("click",function(){
	mostrar("cantabria.txt");
});

liCordoba.addEventListener("click",function(){
	mostrar("cordoba.txt");
});

liSegovia.addEventListener("click",function(){
	mostrar("segovia.txt");
});

liSevilla.addEventListener("click",function(){
	mostrar("sevilla.txt");
});

function mostrar(archivo){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			contenido.innerHTML = this.responseText;
		}
	};

	xhttp.open("GET", archivo);
	xhttp.send();
}