var inputMarcaModelo = document.getElementById("marca");
var selectNumero = document.getElementById("numero");
var tipos = document.querySelectorAll("input[name=tipo]");
var tableBody = document.querySelector("#tablacoches>tbody");
var lista = document.getElementById("listacoches");

document.getElementById("poner").addEventListener("click",function(){
	if(inputMarcaModelo.value != "" && selectNumero.value != "" && comprobarTipoCoche(tipos) != null){
		marcaModelo = inputMarcaModelo.value;
		numUnidades = selectNumero.value;
		tipo = comprobarTipoCoche(tipos);

		let lineas = tableBody.getElementsByTagName("tr");
		
		lineaCreada = false;
		contadorLineas = 0;
		while(!lineaCreada && contadorLineas < lineas.length){
			let linea = lineas.item(contadorLineas);
			let celdas = linea.getElementsByTagName("td");
			let tdMarcaModelo = celdas.item(0).textContent;

			if(tdMarcaModelo > marcaModelo){
				linea.before(crearLinea(marcaModelo,numUnidades,tipo));
				lineaCreada = true;
			}else if (marcaModelo == tdMarcaModelo){
				celdas.item(1).textContent = numUnidades
				celdas.item(2).textContent = tipo;
				lineaCreada = true;
				insertarEnLaLista(marcaModelo);
			}
			contadorLineas++;
		}

		if(!lineaCreada){
			tableBody.append(crearLinea(marcaModelo,numUnidades,tipo));
		}
	}
});

function insertarEnLaLista(marcaModelo) {
	let lis = lista.getElementsByTagName("li");

	liCreado = false;
	contadorLis = 0;

	while(!liCreado && contadorLis < lis.length){
		let li = lis.item(contadorLis);
		liText = li.textContent;

		if(liText == marcaModelo){
			liCreado = true;
		}else if(liText < marcaModelo){
			li.before(crearLi(marcaModelo));
			liCreado = true;
		}
		contadorLis++;
	}

	if(!liCreado){
		lista.append(crearLi(marcaModelo));
	}
}

function crearLi(marcaModelo){
	let li = document.createElement("li");
	li.append(document.createTextNode(marcaModelo));
	return li;
}

function crearLinea(marcaModelo,numUnidades,tipo){
	let linea = document.createElement("tr");
	let tdMarcaModelo = document.createElement("td");
	let tdNumUnidades = document.createElement("td");
	let tdTipo = document.createElement("td");
	tdMarcaModelo.append(document.createTextNode(marcaModelo));
	tdNumUnidades.append(document.createTextNode(numUnidades));
	tdTipo.append(document.createTextNode(tipo));
	linea.append(tdMarcaModelo);
	linea.append(tdNumUnidades);
	linea.append(tdTipo);
	
	return linea;
}

function comprobarTipoCoche(tipos){
	for(let x of tipos){
		if(x.checked){
			return x.value;
		}
	}
	return null;
}