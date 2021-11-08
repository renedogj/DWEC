document.primero.cp.onchange = asignarCodigoPostal;
document.primero.onsubmit = enviar;

function enviar(){
	var mensajeError = "";
	var enviar = true;
	var banco = document.primero.codigoBanco.value;
	var sucursal = document.primero.codigoOficina.value;
	var codControl = document.primero.codigoControl;
	var cuenta = document.primero.numerCuenta.value;

	if(!comprobarRazonSocial(document.primero.razonSocial.value)){
		mensajeError += "La razón social introducida no es valida\n";
		enviar = false;
	}

	if(!comprobarCodigoEmpresa(document.primero.codigoEmpresa.value)){
		mensajeError += "El código de empresa introducido no es valido";
		enviar = false;
	}

	if(!esNifCif(document.primero.CifNif.value)){
		switch (document.primero.CifNif.value) {
			case "C1":
				mensajeError += "Se ha introducido un cif correcto\n";
				break;
			case "C2":
				mensajeError += "Se ha introducido un cif erróneo. El carácter de control es erróneo\n";
				break;
			case "N1":
				mensajeError += "Se ha introducido un NIF correct\n";
				break;
			case "N2":
				mensajeError += "Se ha introducido un NIF erróneo. El carácter de control es erróneo\n";
				break;
			case "N3":
				mensajeError += "Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 10000\n";
				break;
			case 0:
				mensajeError += "Se ha introducido un dato no válido. No es CIF\n";
				break;
		}
		enviar = false;
	}

	if(!comprobarDireccion(document.primero.direccion.value)){
		mensajeError += "La dirección introducida no es valida\n";
		enviar = false;
	}

	if(!comprobarTelefono(document.primero.telefono.value)){
		mensajeError += "El teléfono introducido no es valido\n";
		enviar = false;
	}

	if(!comprobarLocalidad(document.primero.localidad.value)){
		mensajeError += "La localidad introducida no es valida\n";
		enviar = false;
	}

	if(!comprobarCodigoPostal(document.primero.cp.value)){
		mensajeError += "El código postal introducido no es valido\n";
		enviar = false;
	}

	if(!comprobarFecha(document.primero.fechaEmpresa.value)){
		mensajeError += "La fecha introducida es incorrecta\n";
		enviar = false;
	}

	if(!comprobarComunidades(document.primero.comunidades.value)){
		mensajeError += "No se han seleccionado la comunidades correctamente\n";
		enviar = false;
	}

	if(!comprobarCodBancoSucursal(banco)){
		mensajeError += "El código de banco no es valido\n";
		enviar = false;
	}

	if(!comprobarCodBancoSucursal(sucursal)){
		mensajeError += "El código de la sucursal no es valido\n";
		enviar = false;
	}

	if(!comprobarNumCuenta(cuenta)){
		mensajeError += "El código´de cuenta no es valido\n";
		enviar = false;
	}

	if(!comprobarCodControl(codControl,banco,sucursal,cuenta)){
		mensajeError += "El código de control no es valido\n";
		enviar = false;
	}

	if(!comprobarCheckbox(document.primero.sectoEconomico)){
		mensajeError += "Se debe seleccionar al menos un sector economico\n";
		enviar = false;
	}

	if(!comprobarSeleccion(document.primero.tipoEmpresa)){
		mensajeError += "Solo se puede selecionar un tipo de empresa\n";
		enviar = false;
	}

	if(mensajeError != ""){
		alert(mensajeError);
	}
	return enviar;
}