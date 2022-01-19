//Funcion para transformar la primera letra del string en mayuscula
function ucFirst(str) {
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);
}