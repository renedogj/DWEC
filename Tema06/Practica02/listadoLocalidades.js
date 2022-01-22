$("#addLocalidad").click(function(){
	let inputLocalidad = $("#localidad").val().trim();
	inputLocalidad = ucFirst(inputLocalidad);

	if(inputLocalidad != ""){
		let localidades = $("#listaLocalidades").children("li");

		localidadCreada = false;
		contador = 0;
		while(!localidadCreada && contador < localidades.length){
			let nombre = $(localidades[contador]).text();

			if(nombre != inputLocalidad){
				if(nombre < inputLocalidad){
					$(localidades[contador]).before("<li>"+inputLocalidad+"</li>");
					localidadCreada = true;
				}else{
					contador++;
				}
			}else{
				localidadCreada = true;
			}
		}

		if(!localidadCreada){
			$("#listaLocalidades").append("<li>"+inputLocalidad+"</li>");
		}
	}
});