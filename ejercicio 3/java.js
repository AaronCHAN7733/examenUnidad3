const edad1  = parseInt(prompt("ingrese la edad de la primera persona: "));
const nombre1 = prompt("ingrese el nombre de la primera persona:");

const edad2 = parseInt(prompt("ingrese la edad de la segunda persona:"));
const nombre2 = prompt("ingrese el nombre de la segunda persona:");

const edad3 = parseInt(prompt("ingresa la edad de la tercera persona: "));
const nombre3 = prompt("ingresa el nombre de la tercera persona: ");

let nombreMayor;

if ( edad1 > edad2 && edad1 > edad3) {
    nombreMayor = nombre1;

} else if ( edad2 > edad1 && edad2 > edad3) {
    nombreMayor = nombre2;
} else {
    nombreMayor = nombre3;
}

const resultado = document.createElement ("h1");
resultado.textContent = " Hola la persona mayor es: " + nombreMayor;

document.body.appendChild(resultado);