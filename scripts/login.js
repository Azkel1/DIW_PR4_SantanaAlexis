document.addEventListener("DOMContentLoaded", () => {
    let login = document.getElementById("login-frame");
    let register = document.getElementById("register-frame");

    //TEMP: Al hacer click en el botón de iniciar sesión llevar a la página de administración. Quitar una vez que se compruebe correctamente en el servidor el login.
    document.getElementById("login-try").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.replace("administracion.html");
    });

    login.addEventListener("click", () => (cambiarActivo)(login, register));
    register.addEventListener("click", () => (cambiarActivo)(register, login));

    /**
     * Función para alternar que opción es la visible en la página de login (iniciar sesión | registrarse). 
     * @param {Object} active Elemento que va a ser el que se muestra al usuario.
     * @param {Object} hidden Elemento que anteriormente era el activo y ahora se va a ocultar.
     */
    function cambiarActivo(active, hidden) {
        activeForm = active.getElementsByTagName("form")[0];    //Obtener el formulario correspondiente al elemento que se va a mostrar.
        hiddenForm = hidden.getElementsByTagName("form")[0];

        //TODO: Comprobar si se puede resumir esto metiendo algunas cosas en la clase ".oculto" de CSS.
        if (active.classList[0] == "oculto") {
            active.style.flexGrow = 3;  //Aumentar el ancho del contenedor
            active.getElementsByClassName("icon-overlay")[0].style.opacity = "0";   //Hacer visible
            active.style.cursor = "default";    //Cambiar el cursor a la flecha por defecto
            active.classList.remove("oculto");  //Quitar la clase CSS "oculto"
            activeForm.style.transform = "translate(0px)"; //Mover el formulario a la posición final

            hidden.style.flexGrow = 1;
            hidden.getElementsByClassName("icon-overlay")[0].style.opacity = "1";
            hidden.style.cursor = "pointer";
            hidden.classList.add("oculto");

            if (window.innerWidth > 530) {
                hiddenForm.style.transform = "translateX(" + (hidden.id == "register-frame" ? "-270" : "270") + "px)";
            } else {
                hiddenForm.style.transform = "translateY(" + (hidden.id == "register-frame" ? "-270" : "270") + "px)";
            }
        }
    }
});
