var dialogInicio = document.getElementById("dialogInicio");
var h1Dialog = document.querySelector("#dialogInicio h1");
var bttnRegistrase = document.getElementById("registrarse");
var bttnEntrar = document.getElementById("entrar");
var bttnCancelar = document.getElementById("bttnCancelar");
var bttnAceptar = document.getElementById("bttnAceptar");

bttnEntrar.addEventListener("click",function() {
	dialogInicio.show();
	h1Dialog.textContent = "Iniciar Sesión";
});

bttnRegistrase.addEventListener("click",function() {
	dialogInicio.show();
	h1Dialog.textContent = "Registrarse";
});

bttnCancelar.addEventListener("click",function(){
	dialogInicio.close();
});

bttnAceptar.addEventListener("click",function(){
	let usuario = document.getElementById("inputUsuario").value;
	let password = document.getElementById("inputPassword").value;
	if(comprobarRegistrarse(usuario,password)){
		document.cookie = usuario + "=" + password;
		dialogInicio.close();
	}else{
		alert("Datos incorrectos");
	}
});