var bttnAddCoches = document.getElementById("addCoche");
bttnAddCoches.addEventListener("click",addCoche);

function addCoche(){
	let tableBody = document.querySelector("#coches>tbody");
	let inputMarca = document.getElementById("marca").value.trim();
	inputMarca = ucFirst(inputMarca);
	let inputModelo = document.getElementById("modelo").value.trim();
	inputModelo = ucFirst(inputModelo);
	let inputPrecio = document.getElementById("precio").value.trim();
	inputPrecio = ucFirst(inputPrecio);

	if(inputMarca!="" && inputModelo!="" && inputPrecio!=""){
		let lineas = tableBody.getElementsByTagName("tr");
		
		lineaCreada = false;
		contador = 0;
		while(!lineaCreada && contador < lineas.length){
			let linea = lineas.item(contador);
			let celdas = linea.getElementsByTagName("td");
			let celdaMarca = celdas.item(0).textContent;
			let celdaModelo = celdas.item(1).textContent;

			if(celdaMarca > inputMarca){
				linea.before(crearLinea(inputMarca,inputModelo,inputPrecio));
				lineaCreada = true;
			}else if (inputMarca == celdaMarca) {
				if(celdaModelo > inputModelo){
					linea.before(crearLinea(inputMarca,inputModelo,inputPrecio));
					lineaCreada = true;
				}else if(inputModelo == celdaModelo){
					celdas.item(2).textContent = inputPrecio;
					lineaCreada = true;
				}
			}
			contador++;
		}

		if(!lineaCreada){
			tableBody.append(crearLinea(inputMarca,inputModelo,inputPrecio));
		}
	}
}

function crearLinea(inputMarca,inputModelo,inputPrecio){
	let linea = document.createElement("tr");
	let marca = document.createElement("td");
	let modelo = document.createElement("td");
	let precio = document.createElement("td");
	marca.append(document.createTextNode(inputMarca));
	modelo.append(document.createTextNode(inputModelo));
	precio.append(document.createTextNode(inputPrecio));
	linea.append(marca);
	linea.append(modelo);
	linea.append(precio);
	
	return linea;
}
