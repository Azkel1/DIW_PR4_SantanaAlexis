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

    /**
     * Hacer que cada enlace del menú lateral carguen el contenido correspondiente.
     */
    (function() {
        let links = sidebar.querySelectorAll("nav>ul>li>a");
        let lastSelected = localStorage.getItem("sidebar-last-selected");
        
        if (lastSelected !== null) {    //Obtener la última opción seleccionada en el menú lateral del localStorage.
            mostrarOpcion(lastSelected, document.evaluate(`//a[contains(., "${lastSelected}")]`, document).iterateNext());
        }

        for (let l of links) {
            let opcion = l.innerText.toLowerCase().replace(/ /g, "_").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //Hacer minúscula, quitar espacios y tildes

            l.addEventListener("click", function() {(mostrarOpcion)(opcion, this)});
        }

        function mostrarOpcion(opcion, link) {
            let selec = document.querySelector(`div[id='${opcion}']`);

            if (selec !== null) {
                document.querySelectorAll(".sidebar-options").forEach((div) => {div.style.display = "none"});  //Ocultar todos los divs de las opciones
                links.forEach((l) => {l.classList.remove("sidebar-selected")}); //Desmarcar la opción seleccionada del menú lateral
                
                selec.style.display = "block"; //Mostrar el div correspondiente a la opción seleccionada
                link.classList.add("sidebar-selected"); //Marcar la opción actual en el menú lateral

                localStorage.setItem("sidebar-last-selected", opcion);  //Almacenar la opción seleccionada en localStorage para que cuando se recargue la página se cargue la última opción elegida.
            }
        }
    })();
});