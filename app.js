let amigos = [];

function asignarTextoId(id, texto) {
    let elemento = document.getElementById(id);
    elemento.innerHTML = texto;
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    if (nombre !== "") {
        console.log(nombre);
        amigos.push(nombre);
        console.log(amigos);
        mostrarLista();
    } else {
        alert("Por favor, ingrese un nombre válido");
    }
}