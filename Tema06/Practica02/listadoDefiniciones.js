$("#addDefinicion").click(function(){
	let inputPalabra = $("#palabra").val().trim();
	let inputSignificado = $("#significado").val().trim();

	if(inputPalabra != "" && inputSignificado != ""){
		let definiciones = $("#listaDefiniciones").children("div");

		definicionCreada = false;
		contador = 0;
		while(!definicionCreada && contador < definiciones.length){
			let palabra = $(definiciones[contador]).children("dt").text();
			let significados = $(definiciones[contador]).children("dd");

			if(palabra == ucFirst(inputPalabra)){
				let existeSignificado = false;
				let contadorSignificados = 0;
				while (!existeSignificado && contadorSignificados < significados.length) {
					if($(significados[contadorSignificados]).text() == ucFirst(inputSignificado)){
						existeSignificado = true;
					}
					contadorSignificados++;
				}

				if(!existeSignificado){
					$(definiciones[contador]).append("<dd>"+ucFirst(inputSignificado)+"</dd>");
				}
				definicionCreada = true;
			}
			contador++;
		}

		if(!definicionCreada){
			$("#listaDefiniciones").append("<div>"+
					"<dt>"+ucFirst(inputPalabra)+"</dt>"+
					"<dd>"+ucFirst(inputSignificado)+"</dd>"+
					"</div>");
		}
	}
});

$("#deleteDefinicion").click(function(){
	let inputPalabra = $("#palabra").val().trim();

	if(inputPalabra != ""){
		let definiciones = $("#listaDefiniciones").children("div");

		definicionEliminada = false;
		contador = 0;
		while(!definicionEliminada && contador < definiciones.length){
			let palabra = $(definiciones[contador]).children("dt").text();

			if(palabra == ucFirst(inputPalabra)){
				$(definiciones[contador]).remove();
				definicionEliminada = true;
			}
			contador++;
		}
	}
});