const boton = document.getElementById("boton");
const textoResultado = document.getElementById("resultado");

function mostrarDimensiones() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;

    textoResultado.textContent = `${ancho} x ${alto}`;
}

boton.addEventListener("click", mostrarDimensiones);