var bttnAddDefiniciones = document.getElementById("addDefinicion");
bttnAddDefiniciones.addEventListener("click",addDefinicion);

function addDefinicion(){
	let inputPalabra = document.getElementById("palabra").value.trim();
	let inputSignificado = document.getElementById("significado").value.trim();

	if(inputPalabra != "" && inputSignificado != ""){
		let listaDefiniciones = document.getElementById("listaDefiniciones");
		let definiciones = listaDefiniciones.getElementsByTagName("div");

		definicionCreada = false;
		contador = 0;
		while(!definicionCreada && contador < definiciones.length){
			let definicion = definiciones.item(contador);
			let palabra = definicion.querySelector("dt").textContent;
			let significados = definicion.getElementsByTagName("dd");

			if(palabra == ucFirst(inputPalabra)){
				existeSignificado = false;
				let contadorSignificados = 0;
				while (!existeSignificado && contadorSignificados < significados.length) {
					let significado = significados.item(contadorSignificados).textContent.trim();
					if(significado == ucFirst(inputSignificado)){
						existeSignificado = true;
					}
					contadorSignificados++;
				}

				if(!existeSignificado){
					let ddSignificado = document.createElement("dd");
					ddSignificado.append(document.createTextNode(ucFirst(inputSignificado)));
					definicion.append(ddSignificado);
				}
				definicionCreada = true;
			}
			contador++;
		}

		if(!definicionCreada){
			let div = document.createElement("div");
			let dtPalabra = document.createElement("dt");
			let ddSignificado = document.createElement("dd");
			dtPalabra.append(document.createTextNode(ucFirst(inputPalabra)));
			ddSignificado.append(document.createTextNode(ucFirst(inputSignificado)));
			div.append(dtPalabra);
			div.append(ddSignificado);
			listaDefiniciones.append(div);
		}
	}
}