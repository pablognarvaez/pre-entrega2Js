// Ropa.Js
const ropa = [

    // Ropa para hombres
    { talle: 'm', 
    color: 'azul', 
    tipo: 'musculosa', 
    precio: 10000
    },
    { talle: 'l', 
    color: 'negro', 
    tipo: 'pantalón', 
    precio: 15000
    },
    { talle: 's', 
    color: 'gris', 
    tipo: 'medias',
    precio: 5000
    },

    // Ropa para mujeres
    { talle: 's', 
    color: 'rojo', 
    tipo: 'musculosa',
    precio: 10000
    },
    { talle: 'm', 
    color: 'blanco', 
    tipo: 'calzas',
    precio: 16000
    },
    { talle: 'l', 
    color: 'verde', 
    tipo: 'medias',
    precio: 4000
    },

    // Accesorios
    { talle: 's', 
    color: 'negro', 
    tipo: 'gorra',
    precio: 6000
    },
    { talle: 'l', 
    color: 'azul', 
    tipo: 'muñequeras',
    precio: 8000
    },
    { talle: 'm', 
    color: 'marron', 
    tipo: 'bolso',
    precio: 40000
    }
];

/// Function.js
let talle = prompt("Ingresar Talle").toLowerCase();
let color = prompt("Ingresar Color").toLowerCase();
let tipo = prompt("Ingresar Tipo").toLowerCase();
let precio = Number(prompt("Ingresar Precio"));

// Datos de búsqueda
const datosBusqueda = {
    talle: talle,
    color: color,
    tipo: tipo,
    precio: precio,
};

// Funciones (sin cambios)

function mostrarRopa(ropa) {
    ropa.forEach((item) => {
        console.log(`Talle: ${item.talle} - Color: ${item.color} - Tipo: ${item.tipo} - Precio: ${item.precio}`);
    });
}

function filtrarRopa() {
    const resultado = ropa.filter(filtrarDatos);
    if (resultado.length) {
        mostrarRopa(resultado);
    } else {
        console.log("Sin resultado");
    }
}

function filtrarDatos(ropa) {
    // Filtrar por cada propiedad solo si se proporciona un valor en datosBusqueda
    if (datosBusqueda.talle && ropa.talle !== datosBusqueda.talle) {
        return false;
    }
    if (datosBusqueda.color && ropa.color !== datosBusqueda.color) {
        return false;
    }
    if (datosBusqueda.tipo && ropa.tipo !== datosBusqueda.tipo) {
        return false;
    }
    if (typeof datosBusqueda.precio === "number" && ropa.precio !== datosBusqueda.precio) {
        return false;
    }
    return true;
}

filtrarRopa();
