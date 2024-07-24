let carrito = [];

function mostrarJuegos() {
    const container = document.getElementById('juegos-container');
    juegos.forEach(juego => {
        const juegoDiv = document.createElement('div');
        juegoDiv.classList.add('juego');

        juegoDiv.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.nombre}">
            <h2>${juego.nombre}</h2>
            <p class="precio">$${juego.precio}</p>
            <p class="plataformas">Plataformas: ${juego.plataformas.join(', ')}</p>
            <p class="tipos">Géneros: ${juego.tipos.join(', ')}</p>
            <button onclick="agregarAlCarrito('${juego.codigo}')">Agregar al Carrito</button>
        `;

        container.appendChild(juegoDiv);
    });
}

function agregarAlCarrito(codigo) {
    const juego = juegos.find(j => j.codigo === codigo);
    carrito.push(juego);
    actualizarCarrito();
}

function actualizarCarrito() {
    document.getElementById('carrito-cantidad').textContent = carrito.length;
}

function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';

    carrito.forEach((juego, index) => {
        const juegoDiv = document.createElement('div');
        juegoDiv.classList.add('juego');

        juegoDiv.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.nombre}">
            <h2>${juego.nombre}</h2>
            <p class="precio">$${juego.precio}</p>
            <button onclick="quitarDelCarrito(${index})">
                Quitar
            </button>
        `;

        carritoContainer.appendChild(juegoDiv);
    });
}

function quitarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
    mostrarCarrito();
}

document.getElementById('ver-carrito').addEventListener('click', () => {
    document.getElementById('carrito-modal').style.display = 'block';
    mostrarCarrito();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('carrito-modal').style.display = 'none';
});

document.getElementById('cerrar-carrito').addEventListener('click', () => {
    document.getElementById('carrito-modal').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', mostrarJuegos);