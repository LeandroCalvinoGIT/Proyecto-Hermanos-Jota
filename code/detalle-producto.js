// Leer el ID de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const producto = productos[id]; // productos.js ya cargó el array

const contenedor = document.getElementById("detalle-producto");

if (producto) {
    const html = `
        <h1>${producto.nombre}</h1>
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <p>${producto.descripcion}</p>
        <ul>
            ${Object.entries(producto.detalles).map(
        ([clave, valor]) => `<li><strong>${clave}:</strong> ${valor}</li>`
    ).join("")}
        </ul>
    `;
    contenedor.innerHTML = html;
} else {
    contenedor.innerHTML = "<p>Producto no encontrado.</p>";
}