document.addEventListener("DOMContentLoaded", () => {
    let login = document.getElementById("login-frame");
    let register = document.getElementById("register-frame");

    //Al hacer click en el botón de iniciar sesión llevar a la página de administración.
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

        if (active.classList[0] == "oculto") {
            active.classList.add("activo");     //Añadir la clase CSS "activo"
            active.classList.remove("oculto");  //Quitar la clase CSS "oculto"
            activeForm.style.transform = "translate(0px)"; //Mover el formulario a la posición final

            hidden.classList.add("oculto");     //Añadir la clase CSS "oculto"
            hidden.classList.remove("activo");  //Quitar la clase CSS "activo"

            if (window.innerWidth > 530) {
                hiddenForm.style.transform = "translateX(" + (hidden.id == "register-frame" ? "-270" : "270") + "px)";
            } else {
                hiddenForm.style.transform = "translateY(" + (hidden.id == "register-frame" ? "-270" : "270") + "px)";
            }
        }
    }
});
