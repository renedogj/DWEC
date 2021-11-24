function codigoProducto(codProducto){
	return /^[\d]{7,11}$/.test(codProducto);
}

function descripcionProducto(descripcion){
	return /^[A-z]{4}[A-z -\d]{10,23}[A-z]{1}$/.test(descripcion);
}

function precioProducto(precio){
	return /^[0-9]+([,][0-9]{2})?$/.test(precio);
}

function nombreEmpresa(nombre){
	return /^[A-z]{3}[A-z .]{10,27}[A-z\d]{1}$/.test(nombre);
}

function codEmpresa(codEmpresa){
	return /^[0-9]{3}[.](ABCE|CADE|FEGU|IJOK|LIMA)[\d]{5,8}[.][A-z\d]{5}$/.test(codEmpresa);
}

function unidadesDisponibles(unidades) {
	var regExp = new RegExp("[1-9]{1}[\d]{1,6}$");
	return regExp.test(unidades);
}

function familiaProducto(familia){
	var regExp = new RegExp("^[A-z]{5}[A-z\d -.|]{10,21}[A-z]{3}$");
	return regExp.test(familia);
}

function empresaTransporte(empresa){
	var regExp = new RegExp("^(SEUR|NACEX|DHL|MRW)$");
	return regExp.test(empresa);
}

function direccionEmpresa(direccion){
	var regExp = new RegExp("^[A-z]{2}[A-z\d.,-ºª\\]{10,28}[A-z\d.]{1}$");
	return regExp.test(direccion);
}

function localidadEmpresa(localidad){
	var regExp = new RegExp("^[A-z]{5,20}$");
	return regExp.test(localidad);
}