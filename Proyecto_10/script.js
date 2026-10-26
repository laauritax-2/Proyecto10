// querySelectorAll busca todos los elementos que coinciden con una clase.
const pestanas = document.querySelectorAll(".pestana");

// Guarda todos los paneles donde está el texto de cada pestaña.
const contenidos = document.querySelectorAll(".contenido");

// forEach repite la acción para cada botón encontrado.
pestanas.forEach((pestana) => {
    // addEventListener espera a que el usuario haga clic en este botón.
    pestana.addEventListener("click", () => {

        // Recorre los botones para quitar la selección anterior.
        pestanas.forEach((elemento) => {
            elemento.classList.remove("activa"); // Quita la clase que marca el botón activo.
            elemento.setAttribute("aria-selected", "false"); // Indica que ya no está seleccionado.
        });

        // Recorre los paneles y los oculta todos.
        contenidos.forEach((contenido) => {
            contenido.classList.remove("activo"); // Quita la clase de panel activo.
            contenido.hidden = true; // Oculta el panel en la página.
        });

        // Marca como activa la pestaña que recibió el clic.
        pestana.classList.add("activa"); // Agrega el estilo de selección.
        pestana.setAttribute("aria-selected", "true"); // Informa que esta pestaña está seleccionada.

        // Lee el id del panel relacionado con el botón pulsado.
        const idContenido = pestana.getAttribute("aria-controls");

        // Busca en el HTML el panel que tiene ese id.
        const contenidoElegido = document.getElementById(idContenido);

        // Muestra únicamente el panel que corresponde al botón.
        contenidoElegido.hidden = false; // Hace visible el panel elegido.
        contenidoElegido.classList.add("activo"); // Añade la clase de panel activo.
    });
});
