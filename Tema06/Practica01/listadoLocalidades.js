var bttnAddLocalidades = document.getElementById("addLocalidad");
bttnAddLocalidades.addEventListener("click",addLocalidad);

function addLocalidad(){
	let inputLocalidad = document.getElementById("localidad").value.trim();
	inputLocalidad = ucFirst(inputLocalidad);

	if(inputLocalidad != ""){
		let listaLocalidades = document.getElementById("listaLocalidades");
		let localidades = listaLocalidades.getElementsByTagName("li");

		localidadCreada = false;
		contador = 0;
		while(!localidadCreada && contador < localidades.length){
			let localidad = localidades.item(contador);
			let nombre = localidad.textContent;

			if(nombre != inputLocalidad){
				if(nombre < inputLocalidad){
					let liLocalidad = document.createElement("li");
					liLocalidad.append(document.createTextNode(inputLocalidad));
					localidad.before(liLocalidad);

					localidadCreada = true;
				}else{
					contador++;
				}
			}else{
				localidadCreada = true;
			}
		}

		if(!localidadCreada){
			let liLocalidad = document.createElement("li");
			liLocalidad.append(document.createTextNode(inputLocalidad));
			listaLocalidades.append(liLocalidad);
		}
	}
}