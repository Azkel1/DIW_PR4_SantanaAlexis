document.addEventListener("DOMContentLoaded", () => {
    let sidebar = document.getElementsByTagName("aside")[0];
    let hideButton = document.getElementById("hide-sidebar");
    let showButton = document.getElementById("show-sidebar");

    //Comprobar si el ancho es menor de 768px para ocultar automáticamente el menú lateral.
    let mq = window.matchMedia("(max-width: 1160px)");
    mq.addEventListener("change", (e) => {
        (e.matches) ? ocultarMenu() : mostrarMenu();
    })

    //Añadir evento al botón de ocultar el menú lateral
    hideButton.addEventListener("click", function () {
        if (!sidebar.classList.contains("sidebar-hide")) ocultarMenu();
    });

    //Añadir evento al botón de mostrar el menú lateral
    showButton.addEventListener("click", function () {
        if (sidebar.classList.contains("sidebar-hide")) mostrarMenu();
    });

    function mostrarMenu() {
        sidebar.classList.remove("sidebar-hide");
        showButton.style.display = "none";
    }

    function ocultarMenu() {
        sidebar.classList.add("sidebar-hide");
        showButton.style.display = "flex";
    }
});