var bttnCalcular = document.getElementById("calcular");
var tablaCoches = document.getElementById("tablaCoches");
tbody = tablaCoches.children[1];
bttnCalcular.addEventListener("click",function(){
	coche = document.getElementById("coche");
	velocidad = document.getElementById("velocidad");
	aceleracion = document.getElementById("aceleracion");
	tiempo = document.getElementById("tiempo");
	if(tbody.children.length != 0){
		cadenaXML = "<coche>"+coche+"</coche>"
			+"<velocidad>"+velocidad+"</velocidad>"
			+"<aceleracion>"+aceleracion+"</aceleracion>"
			+"<tiempo>"+coche+"</tiempo>";
		let inicial={
			method:"POST",
			body: cadenaXML,
		};

		fetch("php/velocidad.php",inicial).then(result=>{
			let parser = new DOMParser();
			let xml = parser.parseFromString(result, "application/xml"); 
			
		});	
    }
});


		