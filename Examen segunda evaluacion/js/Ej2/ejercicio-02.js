var monumentos = [];
monumentos["Burgos"] = ["Arco de Santa María", "Monasterio de San Juan", "Puente de Santa María", "Arco de San Esteban", "Solar del Cid", "Arco de Fernán González", "Antiguo Seminario  Mayor",  "Monasterio  de  Santa  María  la  Real  de  las  Huelgas", "Catedral", "El Cid Campeador"];
monumentos["Córdoba"] = ["Mezquita-Catedral", "Alcázares  de  los  Reyes  Cristianos",  "Medina  Azahara", "Puente Romano",  "Caballerizas Reales", "Torre de la Calahorra", " Templo Romano",  "Torre  de  la  Malmuerta",  "Alminar  de  San  Juan",  "Mausoleos Romanos", "Capilla de San Bartolomé"];
monumentos["A Coruña"] = ["Torre de Hércules", "Obelisco Millenium", "iglesia de las Capuchinas", "Castillo de San Antón", "Convento de Santa Bárbara", "Convento de Santo Domingo", "Iglesia de San Jorge", "iglesia de San Nicolás", "Colegiata de Santa María", "Iglesia de Santiago"];
monumentos["León"] = ["Catedral",  "Basílica  de  San  Isidoro",  "Casa  de  Botines",  "Convento  de  las Concepciones", "Cripta de Puerta Obispo", "Iglesia de los Padres Capuchinos", "Iglesia de Nuestra Señora del Camino", "Iglesia de San Marcelo", "Iglesia de SantaAna"];
monumentos["Mérida"] = ["teatro Romano", "Templo de Diana", "Acueducto de los Milagros", "Puente romano sobre el Guadiana", "Anfiteatro Romano", "arco de Trajano", "Alcazaba árabe", "Basílica de Santa Eulalia", "Foro romano", "Circo Romano", "Catedral de Santa María", "Puente romano sobre el Albarregas", "Templo de Marte"];
monumentos["Salamanca"] = ["Catedral Nueva", "Catedral Vieja", "Fachada de la Universidad", "Casa de las Conchas", "La Clerencia", "convento de San Esteban", "Plaza Mayor", "Casa Lis"];
monumentos["Segovia"] = ["Alcázar", "Acueducto", "Catedral", "Real Casa de Moneda", "Casa de los Picos", "Iglesia  de  San  Martín",  "Iglesia  de  la  Santísima  Trinidad",  "Iglesia  de  San Esteban", "Iglesia de San Millán", "Iglesia de la Vera Cruz", "Iglesia del Corpus Cristi", "Monasterio del Parral"];
monumentos["Sevilla"] = ["Giralda",  "Torre  del  Oro",  "Archivo  de  Indias",  "Casa  Pilatos",  "Catedral", "Palacio de San Telmo", "Hospital de la Caridad", "Parque de María Luisa", "Reales Alcázares", "Real Maestranza de Caballería", "Plaza España", "Baílica de la Macarena", "Jardines de Murillo"];
monumentos["Zamora"] = ["Catedral", "Puente de Piedra", "Puerta del Obispo", "Puerta de Doña Urraca", "Muralla", "Monasterio de la Carballeda", "Puerta de la Traición", "Molinos de Agua", "Castillo", "Palacio de los Monos"];

olMonumentos = document.getElementById("monumetos");
selectLocalidad = document.getElementById("localidad");

selectLocalidad.addEventListener("change",function(){
    for(let child of olMonumentos.childNodes){
        olMonumentos.removeChild(child);
    }
    localidadesSelecionadas = [];
    for(let x of this){
		if(x.selected){
			localidadesSelecionadas.push(x.text);
		}
    }
    let monumentosOrdenados = [];
    for(let localidad of localidadesSelecionadas){
        for(let monumento of monumentos[localidad]){
            monumentosOrdenados.push(monumento + "-" + localidad);
        }
    }
    monumentosOrdenados.sort();
    for(let nombre of monumentosOrdenados){
        olMonumentos.append(crearMonumento(nombre));
    }
});

function crearMonumento(nombre){
    let li = document.createElement("li");
    li.append(document.createTextNode(nombre));
    return li;
}

var regiones = []
regiones["España"] = ["Asturias","Galicia","Cantabria","País Vasco","Navarra","Aragón","Cataluña","Castilla y León","Madrid","La Rioja","Extremadura","Castilla La Mancha","Valencia","Murcia","Andalucía","Canarias","Baleares","Zamora","Cáceres"];
regiones["Alemania"] = ["Baden-Wurtemberg","Baviera","Berlín","Brandeburgo","Bremen","Hamburgo","Hesse","Mecklemburgo-Pomerania Occidental","Baja Sajonia","Renania del Norte-Westfalia","Renania-Palatinado","Sarre","Sajonia","Sajonia-Anhalt","Schleswig-Holstein","Turingia"];
regiones["Grecia"] = ["Tracia","Macedonian","Tesalia","Epiro","Grecia Central","Peloponeso","Islas del Egeo","Islas Jónicas","Creta"];
regiones["Inglaterra"] = ["Gran Londres (Greater London)","Sudeste de Inglaterra (South East England)","Sudoeste de Inglaterra (South West England)","Midlands del Oeste (West Midlands)","Noroeste de Inglaterra (North West England)","Nordeste de Inglaterra (North East England)","Yorkshire y Humber (Yorkshire and the Humber)","Midlands Oriental (East Midlands)","Inglaterra mega (East of England)"];
regiones["Portugal"] = ["Algarve","Alto Alentejo","Baixo Alentejo","Beira Alta","BeiraBaixa","Beira Litoral","Douro Litoral","Estremadura","Minho","Ribatejo","Trás-os-Montes","Alto Douro"];
regiones["Italia"] = ["Abruzzo","Basilicata","Calabria","Campania","Cerdeña","Emilia Romagna","FriuliVeneziaGiulia","Lazio","Liguria","Lombardia","Marche","Molise","Piamonte","Puglia","Sicilia","Toscana","Trentino Alto Adige","Umbria","Valle d'Aosta","Veneto"];
regiones["Francia"] = ["Alsacia","Aquitania","Auvernia","Borgoña","Bretaña","Valle del Loira","Champagne-Ardenas","Córcega","Franche-Comte","Paris / Ile de France","Languedoc - Roussillon","Limousin","Lorena","Midi-Pyrénées","Nord Pas-de-Calais","Normandía","País del Loira","Picardía","Poitou-Charentes","Provenza-Alpes-Costa Azul","Rhône-Alpes","Riviera Costa Azul"];

bttnBorrarRegiones = document.getElementById("borrar");
selectPaises = document.getElementById("paises");
tablaRegiones = document.getElementById("regiones");

bttnBorrarRegiones.addEventListener("click",function(){
    tbody = tablaRegiones.children[1];
    paisSelecionado = selectPaises.value;
    if(bttnBorrarRegiones.value == "Borrar "){
        for(let trChild of tbody.children){
            for(let tdChild of trChild.children){
                if(regiones[paisSelecionado].includes(tdChild.innerText) || tdChild.innerText == ""){
                    trChild.removeChild(tdChild);
                }
            }
            if(trChild.children.length == 0){
                tbody.removeChild(trChild);
            }
        }
        if(tbody.children.length == 0){
            bttnBorrarRegiones.value = "Añadir";
        }
    }else if(bttnBorrarRegiones.value == "Añadir"){
        if(comprobarRepeticionPaises(tbody,paisSelecionado)){
            let trPais = document.createElement("tr");
            trPais.setAttribute("id",paisSelecionado);
            for(let region of regiones[paisSelecionado]){
                let tdRegion = document.createElement("td");
                tdRegion.append(document.createTextNode(region));
                trPais.append(tdRegion);
            }
            tbody.append(trPais);
        }
        if(tbody.children.length == regiones.length){
            bttnBorrarRegiones.value = "Borrar ";
        }
    } 
});

function comprobarRepeticionPaises(tbody,pais){
    for(let trChild of tbody.children){
        if(trChild.getAttribute("id") == pais){
            return false;
        }
    }
    return true;
}