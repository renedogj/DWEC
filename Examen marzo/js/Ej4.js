$("#calcular").click(function(){
	caras = $("#caras").val();
	vertices = $("#vertices").val();

	var formData = new FormData();
	formData.append("numcaras",caras);
	formData.append("numvertices",vertices);

	let configuracion={
			method:"POST",
			dataType:"text",
			data:formData,
			cache: false,
			processData: false,
			contentType: false,
			success:resultado	
		};

	$.ajax("php/ejercicio04.php",configuracion);
});

function resultado(valor){
	$("#aristas").val(valor);
}

