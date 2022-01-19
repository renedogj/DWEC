var bttnmostrarProvincias = document.getElementById("mostrarProvincias");
bttnmostrarProvincias.addEventListener("click",mostrarProvincias);

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

function mostrarProvincias(){
    let selectComunidades = document.getElementById("selectComunidades");
    let comunidadSelecionada = selectComunidades.value;
    let provincias = eval(comunidadSelecionada);

    let selectProvincias = document.getElementById("selectProvincias");
    if(selectProvincias != null){
        selectProvincias.remove();
    }
    selectProvincias = document.createElement("select");
    selectProvincias.id = "selectProvincias";

    for(var i = 0; i < provincias.length; i++){
        let option = document.createElement("option");
	    option.append(document.createTextNode(provincias[i]));
        selectProvincias.append(option);
    }

    document.getElementById("formComunidades").append(selectProvincias);
}

