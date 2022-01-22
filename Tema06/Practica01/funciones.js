//Funcion para transformar la primera letra del string en mayuscula
function ucFirst(str) {
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);
}

function comprobarRegistrarse(nombre,password){
	if(!/[A-z]{3}[A-z1-9]{5,9}$/.test(nombre)){
		return false;
	}
	if(!/[A-z]{3}[A-z1-9_]{4,8}[A-z1-9]{1}/.test(password)){
		return false;
	}
	return true;
}