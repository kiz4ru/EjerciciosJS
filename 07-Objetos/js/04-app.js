const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Destructuring para extraer los valores del objeto
const { nombre } = producto;

console.log(nombre);

const { precio, disponible } = producto;

console.log(precio);

console.log(disponible);
