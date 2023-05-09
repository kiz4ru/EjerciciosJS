const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    //imagen: "imagen.jpg"
}

//agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg"; 

//eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);