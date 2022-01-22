$("#addCoche").click(function(){
	let inputMarca = $("#marca").val().trim();
	inputMarca = ucFirst(inputMarca);
	let inputModelo = $("#modelo").val().trim();
	inputModelo = ucFirst(inputModelo);
	let inputPrecio = $("#precio").val().trim();
	inputPrecio = ucFirst(inputPrecio);

	if(inputMarca!="" && inputModelo!="" && inputPrecio!=""){

		let lineas = $("#coches>tbody").children("tr");
		
		lineaCreada = false;
		contador = 0;
		while(!lineaCreada && contador < lineas.length){
			let linea = $(lineas[contador]);
			let celdas = linea.children("td");
			let celdaMarca = $(celdas[0]).text();
			let celdaModelo = $(celdas[1]).text();

			if(celdaMarca > inputMarca){
				linea.before(crearLinea(inputMarca,inputModelo,inputPrecio));
				lineaCreada = true;
			}else if (inputMarca == celdaMarca) {
				if(celdaModelo > inputModelo){
					linea.before(crearLinea(inputMarca,inputModelo,inputPrecio));
					lineaCreada = true;
				}else if(inputModelo == celdaModelo){
					$(celdas[2]).text(inputPrecio);
					lineaCreada = true;
				}
			}
			contador++;
		}

		if(!lineaCreada){
			$("#coches>tbody").append(crearLinea(inputMarca,inputModelo,inputPrecio));
		}
	}
});

function crearLinea(inputMarca,inputModelo,inputPrecio){	
	return "<tr>"+
		"<td>"+inputMarca+"</td>"+
		"<td>"+inputModelo+"</td>"+
		"<td>"+inputPrecio+"</td>"+
		"</tr>";
}
