var andalucia = ["Almería","Cádiz","Cordoba","Granada","Huelva","Jaén","Málaga","Sevilla"];;
var aragon = ["Huesca","Teruel","Zaragoza"];
var asturias = ["Asturias"];
var baleares = ["Islas Baleares"];
var paisvasco = ["Alava","Bizkaia","Gipuzkoa"];
var canarias = ["Las Palmas","Santa Cruz de Tenerife"];
var cantabria = ["Cantabria"];
var castillalamancha = ["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"];
var castillayleon = ["Avila","Burgos","Leon","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"];
var cataluña = ["Barcelona","Girona","Lleida","Tarragona"];
var extremadura = ["Badajoz","Caceres"];
var galicia = ["A Coruña","Lugo","Ourense","Pontevedra"];
var madrid = ["Madrid"];
var murcia = ["Murcia"];
var navarra = ["Navarra"];
var rioja = ["La Rioja"];
var valencia = ["Alicante","Castellon","Valencia"];
var ceuta = ["Ceuta"];
var melilla = ["Melilla"];

$("#mostrarProvincias").click(function(){
	let comunidadSelecionada = $("#selectComunidades").val();
	let provincias = eval(comunidadSelecionada);

	let selectProvincias = $("#selectProvincias");
	if(selectProvincias != null){
		selectProvincias.remove();
	}
	selectProvincias = '<select id="selectProvincias">';

	for(var i = 0; i < provincias.length; i++){
		selectProvincias += "<option>"+provincias[i]+"</option>";
	}

	selectProvincias += "</select>";

	$("#formComunidades").append(selectProvincias);
});

