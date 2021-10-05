function validar(){
	var palindromo = document.formulario.palindromo.value;
	document.formulario.mensaje.value = comprobarPalindromo(palindromo);
}

function comprobarPalindromo(palindromo){
	palindromo = palindromo.trim();
	palindromo = palindromo.replace(" ","");
	arrayPalindromo = palindromo.split("");
	arrayPalindromo.reverse();
	palindromoInverso = arrayPalindromo.join("");
	return palindromo == palindromoInverso;
}

document.formulario.boton.onclick = validar;