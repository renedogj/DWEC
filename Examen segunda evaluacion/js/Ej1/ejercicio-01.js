window.onload = cargar;

function  cargar() {
    document.formulario.onsubmit = enviar;
    document.formulario.minuni.onkeyup = soloAdmitirDigitos;
    document.formulario.unidades.onkeyup = soloAdmitirDigitos;
    document.formulario.precio.onkeyup = soloAdmitirDigitosPunto;

    document.formulario.codigo.onfocus = cambiarAspecto;
    document.formulario.codigo.onblur = volverAlAspectoOriginal;
    document.formulario.descripcion.onfocus = cambiarAspecto;
    document.formulario.descripcion.onblur = volverAlAspectoOriginal;
    document.formulario.fecha.onfocus = cambiarAspecto;
    document.formulario.fecha.onblur = volverAlAspectoOriginal;
    document.formulario.precio.onfocus = cambiarAspecto;
    document.formulario.precio.onblur = volverAlAspectoOriginal;
    document.formulario.empresa.onfocus = cambiarAspecto;
    document.formulario.empresa.onblur = volverAlAspectoOriginal;
    document.formulario.codempre.onfocus = cambiarAspecto;
    document.formulario.codempre.onblur = volverAlAspectoOriginal;
    document.formulario.direccion.onfocus = cambiarAspecto;
    document.formulario.direccion.onblur = volverAlAspectoOriginal;
    document.formulario.localidad.onfocus = cambiarAspecto;
    document.formulario.localidad.onblur = volverAlAspectoOriginal;
    document.formulario.minuni.onfocus = cambiarAspecto;
    document.formulario.minuni.onblur = volverAlAspectoOriginal;
    document.formulario.unidades.onfocus = cambiarAspecto;
    document.formulario.unidades.onblur = volverAlAspectoOriginal;
    document.formulario.familia.onfocus = cambiarAspecto;
    document.formulario.familia.onblur = volverAlAspectoOriginal;
    document.formulario.transporte.onfocus = cambiarAspecto;
    document.formulario.transporte.onblur = volverAlAspectoOriginal;
}

function soloAdmitirDigitos(key){
    if(!esDigito(key["key"])){
        this.value = this.value.replace(/\D/,"");
    }
}

function soloAdmitirDigitosPunto(key){
    if(!esDigito(key["key"])){
        this.value = this.value.replace(/[^\d.]/,"");
    }
}

function cambiarAspecto(){
    this.value = "";
    this.style.background = "red";
    this.style.color = "yellow"; 
}

function volverAlAspectoOriginal(){
    this.style.background = "white";
    this.style.color = "black";
}

function enviar(){
	var mensajeError = "";
    var enviar = true;

    if(!validarCodigoProducto(document.formulario.codigo.value)){
        enviar = false;
        mensajeError += "El código del producto no tiene el formato correcto\n";
    }

    if(!validarDescripcionProducto(document.formulario.descripcion.value)){
        enviar = false;
        mensajeError += "La descripcion del producto no tiene el formato correcto\n";
    }

    if(validarfechaAltaEmpresa(document.formulario.fecha.value)){
        enviar = false;
        mensajeError += "La fecha de alta no tiene el formato correcto\n";
    }

    if(validarPrecioProducto(document.formulario.precio.value)){
        enviar = false;
        mensajeError += "El precio del producto no tiene el formato correcto\n";
    }

    if(validarNombreEmpresaDistribucion(document.formulario.empresa.value)){
        enviar = false;
        mensajeError += "El nombre de la empresa de distribucion no tiene el formato correcto\n";
    }

    if(validarCodEmpresa(document.formulario.codempre.value)){
        enviar = false;
        mensajeError += "El codigo de la empresa no tiene el formato correcto\n";
    }

    if(validarDireccionEmpresa(document.formulario.direccion.value)){
        enviar = false;
        mensajeError += "La direccion de la empresa no tiene el formato correcto\n";
    }

    if(validarLocalidadEmpresa(document.formulario.localidad.value)){
        enviar = false;
        mensajeError += "La localidad de la empresa no tiene el formato correcto\n";
    }

    if(validarUnidadesMinimas(document.formulario.minuni.value)){
        enviar = false;
        mensajeError += "El número de unidades minimas no tiene el formato correcto\n";
    }

    if(validarUnidadesDisponibles(document.formulario.unidades.value)){
        enviar = false;
        mensajeError += "El número de unidades disponibles no tiene el formato correcto\n";
    }

    if(validarFamiliaProducto(document.formulario.familia.value)){
        enviar = false;
        mensajeError += "La familia del producto no tiene el formato correcto\n";
    }

    if(validarEmpresaTransporte(document.formulario.transporte.value)){
        enviar = false;
        mensajeError += "La empresa de transporte utilizada no se corresponde con los valores admitidos\n";
    }

    if(!comprobarSelecionIva(document.formulario.iva)){
        enviar = false;
        mensajeError += "Debe selecionarse un tipo de iva\n";
    }

    if(!comprobarSectorProduccion(document.formulario.elements)){
        enviar = false;
        mensajeError += "Debe selecionarse al menos un sector de produccion\n";
    }
    
    if(!comprobarPaises(document.formulario.paises)){
        enviar = false;
        mensajeError += "Debe selecionarse al menos 3 paises\n";
    }

    if(mensajeError != ""){
		alert(mensajeError);
    }
	return enviar;
}