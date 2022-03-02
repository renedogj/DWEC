$("#incluir").click(function(){
	familia = $("#familia").val()
	subfamilia = $("#subfamilia").val()
	individuos = $("#individuos").val()

	if(familia != "" && subfamilia != "" && individuos != ""){
		familia = formatear(familia);
		subfamilia = formatear(subfamilia);

		let lineas = $("#tablaanimales>tbody").children("tr");

		lineaCreada = false;
		contador = 0;

		var familias = [];
		var totalIndividuos = 0;

		while(!lineaCreada && contador < lineas.length){
			let linea = $(lineas[contador]);
			let celdas = linea.children("td");
			let tdFamilia = $(celdas[0]).text();
			let tdSubFamilia = $(celdas[1]).text();
			let tdindividuos = $(celdas[2]).text();

			if(tdFamilia > familia){
				linea.before(crearLinea(familia,subfamilia,individuos));
				lineaCreada = true;
			}else if (familia == tdFamilia) {
				if(tdSubFamilia < subfamilia){
					linea.before(crearLinea(familia,subfamilia,individuos));
					lineaCreada = true;
				}else if(subfamilia == tdSubFamilia){
					$(celdas[2]).text(parseInt(tdindividuos) + parseInt(individuos));
					lineaCreada = true;
				}
			}
			contador++;
		}

		if(!lineaCreada){
			$("#tablaanimales>tbody").append(crearLinea(familia,subfamilia,individuos));
		}

		lineas = $("#tablaanimales>tbody").children("tr");

		for (var i = 0; i < lineas.length; i++) {
			let celdas = $(lineas[i]).children("td");
			let tdFamilia = $(celdas[0]).text();
			let tdindividuos = $(celdas[2]).text();

			if(!familias.includes(tdFamilia)){
				familias.push(tdFamilia);
			}
			totalIndividuos = parseInt(totalIndividuos) + parseInt(tdindividuos);
		}

		let lineastfoot = $("#tablaanimales>tfoot").children("tr");

		$($(lineastfoot[0]).children("td")[1]).text(totalIndividuos);
		$($(lineastfoot[1]).children("td")[1]).text(familias.length);
		$($(lineastfoot[2]).children("td")[1]).text(lineas.length);
	}
});


function crearLinea(familia,subfamilia,individuos){
	return $("<tr>").append(
		$("<td>").text(familia),
		$("<td>").text(subfamilia),
		$("<td>").text(individuos)
	)
}

function formatear(str) {
	if (!str) return str;
	str = str.toLowerCase();
	return str[0].toUpperCase() + str.slice(1);
}