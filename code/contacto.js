document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    const mensajeExito = document.getElementById("mensaje-exito");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor ingresa un email válido.");
            return;
        }

        // Simula el envío
        form.reset();
        mensajeExito.style.display = "block";
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});