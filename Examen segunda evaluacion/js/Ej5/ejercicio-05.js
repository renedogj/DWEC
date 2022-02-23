$("#calcular").click(function(){
	if($("#tablaCoches tbody").children.length != 0){
		var datos = {};
		datos["velocidad"] = $("#velocidad").val();
		datos["aceleracion"] = $("#aceleracion").val();
		datos["tiempo"] = $("#tiempo").val();
		console.log(datos);

		$.ajax({url:"php/distancia.php",success:resultado,data:datos,method:"POST",dataType:"json"});
	}
	
	function resultado(result){
		console.log(result);
	}
});