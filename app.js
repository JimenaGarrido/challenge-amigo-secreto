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

function mostrarLista(){
    let listaDeNombres = document.getElementById('listaAmigos');
    
    limpiarCaja();

    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        listaDeNombres.appendChild(nuevoElemento);
    }
}

function limpiarCaja(){
    document.getElementById('amigo').value = ""; 
    document.getElementById('listaAmigos').innerHTML = ""; 
}

function sortearAmigo(){
    if (amigos.length > 0) {
        limpiarCaja();
        let posicionAleatoria = Math.floor(Math.random() * amigos.length);
        let nombre = amigos[posicionAleatoria];
        asignarTextoId('resultado', "El amigo sorteado secreto es: " + nombre);
    } else {
        alert('La lista está vacía');
    }
}