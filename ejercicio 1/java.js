const filas = parseInt(prompt("ingrese el numero de filas"));
const columnas = parseInt(prompt("ingrese el numero de columnas:"));

let numero = filas * columnas;

const tabla = document.createElement("table");

for (i = 0; i < filas; i++) {
    const fila = tabla.insertRow();

    for (let j = 0; j < columnas; j++) {
        const  celda = fila.insertCell();
        celda.textContent = numero;
        numero--;
    }
    document.body.appendChild(tabla);
}