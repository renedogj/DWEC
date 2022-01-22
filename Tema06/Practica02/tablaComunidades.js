$("#aplicarColores").click(function(){
	let n1 = rand(0, 255);
	let n2 = rand(0, 255);
	let n3 = rand(0, 255);
	let n4 = rand(0, 255);
	let n5 = rand(0, 255);
	let n6 = rand(0, 255);

	$("#tablaColores tr:even").css("background-color","rgb("+n1+","+n2+","+n3+")");
	$("#tablaColores tr:odd").css("background-color","rgb("+n4+","+n5+","+n6+")")
});

function rand(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}