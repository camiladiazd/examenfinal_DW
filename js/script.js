document.addEventListener("DOMContentLoaded", function () {

  document.body.classList.add("loaded");
  console.log("JS cargado");

  
  const formulario = document.getElementById("formulario");
  const lista = document.getElementById("lista-usuarios");

  
  if (formulario && lista) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const rol = document.getElementById("rol").value;

      const tarjeta = document.createElement("div");
      tarjeta.classList.add("usuario");

      const contenido = document.createElement("p");
      contenido.textContent = `👤 ${nombre} - ${rol}`;

      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add("boton-eliminar");

      botonEliminar.addEventListener("click", () => {
        tarjeta.remove();
      });

      tarjeta.appendChild(contenido);
      tarjeta.appendChild(botonEliminar);
      lista.appendChild(tarjeta);

      formulario.reset();
    });
  }
});
