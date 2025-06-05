document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos <li> dentro de #Mislistas
    let listadenombres = document.querySelectorAll("#Mislistas li");
    // Obtiene el botón con el ID 'Mibutton'
    const button = document.getElementById("Mibutton");

    // Añade un solo evento click al botón
    button.addEventListener("click", function() {
        // Itera sobre cada elemento al hacer clic en el botón
        listadenombres.forEach(function(x) {
            // Genera un color aleatorio para el texto
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            // Cambia el color del texto de cada elemento al color aleatorio
            x.style.color = randomColor;
        });
    });
});
