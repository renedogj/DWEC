function esNif (nif) {
	var caracterControl = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
	var letrasControl = ["X","Y","Z","L","K","M"];
	if(nif.length == 9){
		if(esLetra(nif[0]) && esLetra(nif[8])){
			var nums = nif.substring(1,8);
			if(letrasControl.includes(nif[0]) && caracterControl.includes(nif[8]) && esDigito(nums)){
				nums = letrasControl.indexOf(nif[0]) + nums;
				if(caracterControl[nums%23] == nif[8]){
					return 1;
				}else{
					return 2;
				}
			}
			return 0;
		}else if(esLetra(nif[8])){
			var nums = nif.substring(0,8);
			if(comprobarDigitos(nums)){
				if(caracterControl[nums%23] == nif[8]){
					return 1;
				}else{
					return 2;
				}
			}
			return 0;
		}
		return 0;
	}else if(nif.length >= 6  && nif.length <= 8){
		if(comprobarDigitos(nif)){
			if(nif >= 100000){
				return 3;
			}
			return 0;
		}
		return 0;
	}
	return 0;
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
						if(valorCaracterControl == 10){
							valorCaracterControl = 0;
						}
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

function esNifCif(nifcif){
	if(esCif(nifcif) == 1){
		return "C1";
	}else if(esCif(nifcif) == 2){
		return "C2";
	}else if(esNif(nifcif) == 1){
		return "N1";
	}else if(esNif(nifcif) == 2){
		return "N2";
	}else if(esNif(nifcif) == 3){
		return "N3";
	}else{
		return 0;
	}
}

function codigosControl(banco,sucursal,cuenta){
	var codigoControl = "";
	var numero1 = banco[0]*4 + banco[1]*8 + banco[2]*5 + banco;
	var numero2 = sucursal[0]*9 + sucursal[1]*7 + sucursal[2]*3 + sucursal[3]*6;
	codigoControl += comprobarModulo(11-((numero1 + numero2))%11);
	var numero3 = cuenta[0] + cuenta[1]*2 + cuenta[2]*4 + cuenta[3]*8 + cuenta[4]*5 + cuenta[5]*10 + cuenta[6]*9 + cuenta[7]*7 + cuenta[8]*3 + cuenta[9]*6;
	codigoControl +=  comprobarModulo(11 - (numero3%11));
	return codigoControl;
}

function calculoIBANEspanya(codigoCuenta){
	var codigoCuentaAux = codigoCuenta + "142800";
	var resto = codigoCuentaAux % 97;
	codigoControl = 98-resto;
	if(codigoControl < 10){
		codigoControl = "0"+codigoControl;
	}
	return "ES" + codigoControl + codigoCuenta;
}

function comprobarIBAN(IBAN){
	if(IBAN.length < 34){
		const arrayLetras = range("A","Z");
		for(let i = 0; i < arrayLetras.length; i++){
			IBAN = IBAN.replaceAll(arrayLetras[i],(i+10).toString());
		}
		if(IbanAux%97 == 1){
			return true;
		}
	}
	return false;
}

