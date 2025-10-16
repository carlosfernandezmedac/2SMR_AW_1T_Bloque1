document.write("Hola Mundo");

var elem = document.getElementById("texto");
elem.innerHTML = "Texto modificado con JavaScript";

var nuevo = document.createElement("p");
var texto = document.createTextNode("Este párrafo fue creado dinámicamente.");
var caja = document.getElementById("contenedor");
nuevo.appendChild(texto);
caja.appendChild(nuevo);