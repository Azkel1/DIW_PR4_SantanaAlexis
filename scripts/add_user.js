document.addEventListener("DOMContentLoaded", () => {
    let tiposUsuario = {alumno: document.getElementById("tipo-usuario-alumno"), profesor: document.getElementById("tipo-usuario-prof")};
    let ciclosList = document.getElementById("ciclos-list");
    let ciclos = document.getElementsByName("ciclos");

    //Hacer que los botones de selección de tipo de usuario (alumno, profesor, etc) muestren la lista de ciclos
    for (let t in tiposUsuario) {
        tiposUsuario[t].addEventListener("click", () => {
            ciclosList.style.display = "block";
            borrarSeleccionModulos();
        });
    }

    //Añadir el evento a cada uno de los ciclos. Al hacer click en uno de ellos primero se comprueba el tipo de usuario que hay selecciondo actualmente.  Después se muestra el fieldset correspondiente a los módulos de ese ciclo.
    ciclos.forEach((e) => {e.addEventListener("click", function() {
        let tipo = document.querySelector("input[name='tipo-usuario']:checked").value;

        if (tipo === "alumno") { //Si es un alumno solo se permite elegir un ciclo.
            borrarSeleccionModulos();
            this.checked = true;
        }

        if (!this.checked) borrarSeleccionModulos(this);

        //Intentar obtener el grupo de módulos correspondiente al ciclo seleccionado. Si existen, mostrarlos.
        let ciclo = document.getElementById(`modulos-${this.value}`);
        if (ciclo !== null) ciclo.style.display = (this.checked) ? "block" : "none";
    })});

    /**
     * Borrar la selección de módulos. Si se pasa un parámetro, borrar solo los módulos seleccionados de ese ciclo, si no, de todos.
     * @param {HTMLElement} ciclo Ciclo sobre el que se quieren relizar las acciones.
     */
    function borrarSeleccionModulos(ciclo = null) {
        if (ciclo !== null && ciclo instanceof HTMLElement) {
            document.querySelectorAll(`input[name='modulos-${ciclo.value}']`).forEach((m) => {m.checked = false});
        } else {
            ciclos.forEach((e) => {e.checked = false});
            document.querySelectorAll("fieldset[id*='modulos']").forEach((m) => {m.style.display = "none"});
            document.querySelectorAll("input[name*='modulos']").forEach((m) => {m.checked = false});
        }
    }
});