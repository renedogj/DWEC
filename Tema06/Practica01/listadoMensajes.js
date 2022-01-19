var bttnAddMensaje = document.getElementById("bttnAddMensaje");
bttnAddMensaje.addEventListener("click",mostrarCrearMensaje);


function mostrarCrearMensaje(){
    let divCrearmensaje = document.createElement("div");
    divCrearmensaje.id = "divCrearMensaje";

    let labelTitulo = document.createElement("label");
    labelTitulo.for = "titulo";
    labelTitulo.append(document.createTextNode("Titulo: "));
    let inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.id = "msgTitulo";
    labelTitulo.append(inputTitulo);

    let labelMensaje = document.createElement("label");
    labelMensaje.for = "mensaje";
    labelMensaje.append(document.createTextNode("Mensaje: "));
    let inputMensaje = document.createElement("textArea");
    inputMensaje.type = "text";
    inputMensaje.id = "msgTexto";
    labelMensaje.append(inputMensaje);

    let bttnCancelar = document.createElement("input");
    bttnCancelar.type = "button";
    bttnCancelar.value = "Cancelar";
    bttnCancelar.addEventListener("click",cancelar);

    let bttnAceptar = document.createElement("input");
    bttnAceptar.type = "button";
    bttnAceptar.value = "Aceptar";
    bttnAceptar.addEventListener("click",aceptar);

    divCrearmensaje.append(labelTitulo);
    divCrearmensaje.append(document.createElement("br"));
    divCrearmensaje.append(labelMensaje);
    divCrearmensaje.append(document.createElement("br"));
    divCrearmensaje.append(bttnCancelar);
    divCrearmensaje.append(bttnAceptar);

    bttnAddMensaje.before(divCrearmensaje);
    bttnAddMensaje.remove();

}

function cancelar(){
    let divCrearmensaje = document.getElementById("divCrearMensaje");
    divCrearmensaje.remove();

    bttnAddMensaje = document.createElement("button");
    bttnAddMensaje.id = "bttnAddMensaje";
    bttnAddMensaje.append(document.createTextNode("Añadir Mensaje"));
    bttnAddMensaje.addEventListener("click",mostrarCrearMensaje);
    document.getElementById("mensajes").after(bttnAddMensaje);
}

function aceptar(){
    msgTitulo = document.getElementById("msgTitulo");
    msgTexto = document.getElementById("msgTexto");
    cancelar();

    let divMensaje = document.createElement("div");
    let h3Titulo = document.createElement("h3");
    h3Titulo.append(document.createTextNode(msgTitulo.value));
    let pTexto = document.createElement("p");
    pTexto.append(document.createTextNode(msgTexto.value));
    divMensaje.append(h3Titulo);
    divMensaje.append(pTexto);

    document.getElementById("mensajes").append(divMensaje);
}