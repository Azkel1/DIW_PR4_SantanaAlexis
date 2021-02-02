document.addEventListener("DOMContentLoaded", () => {
    let sidebar = document.getElementsByTagName("aside")[0];
    let hideButton = document.getElementById("hide-sidebar");
    let showButton = document.getElementById("show-sidebar");

    //Comprobar si el ancho es menor de 768px para ocultar automáticamente el menú lateral.
    if (window.innerWidth < 768) {
        sidebar.classList.add("sidebar-hide");
        showButton.style.display = "block";
    } 

    //Añadir evento al botón de ocultar el menú lateral
    hideButton.addEventListener("click", function () {
        if (!sidebar.classList.contains("sidebar-hide")) {
            sidebar.classList.add("sidebar-hide");
            showButton.style.display = "block";
        }
    });

    //Añadir evento al botón de mostrar el menú lateral
    showButton.addEventListener("click", function () {
        if (sidebar.classList.contains("sidebar-hide")) {
            sidebar.classList.remove("sidebar-hide");
            showButton.style.display = "none";
        }
    });
});