// 󾠮 Seleccionamos los elementos del DOM necesarios
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista-usuarios");
// 󾠯 Agregamos un evento al formulario para detectar el envío (submit)
formulario.addEventListener("submit", function (e) {
e.preventDefault();
// 󾠰 Obtenemos el valor ingresado por el usuario en los inputs
const nombre = document.getElementById("nombre").value;
const rol = document.getElementById("rol").value;
// 󾠱 Creamos los nuevos elementos HTML (nodos)
const tarjeta = document.createElement("div");
tarjeta.classList.add("usuario");
const contenido = document.createElement("p"); 
// Elemento <p> con el nombre y rol
contenido.textContent = `👤 ${nombre} - ${rol}`;
const botonEliminar = document.createElement("button"); 
// Botón para eliminar
botonEliminar.textContent = "Eliminar";
botonEliminar.classList.add("boton-eliminar"); 
// Clase para estilos
// 󾠲 Agregamos el evento para eliminar la tarjeta al hacer click en el botón
botonEliminar.addEventListener("click", () => {
tarjeta.remove(); // Elimina la tarjeta del DOM
});
// 󾠳 Armamos la estructura: primero el texto y el botón dentro de la tarjeta
tarjeta.appendChild(contenido);
tarjeta.appendChild(botonEliminar);
// 󾠴 Finalmente, agregamos la tarjeta al contenedor principal
lista.appendChild(tarjeta);
// 󾠵 Limpiamos el formulario para que quede listo para otro ingreso
formulario.reset();
});