function esNif (nif) {
	var caracterControl = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
	var letrasControl = ["X","Y","Z","L","K","M"];
	if(nif.length == 9){
		if(esLetra(nif[0]) && esLetra(nif[8])){
			var nums = nif.substring(1,8);
			if(letrasControl.includes(nif[0]) && caracterControl.includes(nif[8]) && esDigito(nums)){
				nums = letrasControl.indexOf(nif[0]) + nums;
				return caracterControl[nums%23] == nif[8];
			}
			return false;
		}else if(esLetra(nif[8])){
			var nums = nif.substring(0,8);
			if(esDigito(nums)){
				return caracterControl[nums%23] == nif[8];
			}
			return false;
		}
		return false;
	}
	return false;
}

function esCif (cif) {
	cif = cif.toUpperCase();
	if(cif.length == 9){
		if(esLetra(cif[0])){
			if(range("A","W").includes(cif[0])){
				var digitos = cif.substring(1,8);
				if(comprobarDigitos(digitos)){
					if(esLetra(cif[8]) || esDigito(cif[8])){
						var sumaImpares = 0;
						for(var i = 0; i < digitos.length; i=i+2){
							if(digitos[i]*2 > 9){
								sumaImpares += parseInt(digitos[i]);
							}else{
								sumaImpares += digitos[i]*2
							}
						}
						var sumPares = 0;
						for(var i = 1; i < digitos.length; i=i+2){
							sumPares += parseInt(digitos[i]);
						}
						var valorCaracterControl = (sumPares + sumaImpares)/10;
						if(valorCaracterControl == 10)
							valorCaracterControl = 0;

						if(esDigito(cif[8])){
							if(valorCaracterControl == cif[8]){
								return 1;
							}else{
								return 2;
							}
						}else{
							var caracterControl = ["J"].concat(range("A","I"));
							if(cif[8] == caracterControl[valorCaracterControl]){
								return 1;
							}else{
								return 2;
							}
						}
					}
					return 0;
				}
				return 0;
			}
			return 0;
		}
		return 0;
	}
	return 0;
}