const producto = 'Monitor 20 pulgadas';


//.repeat para repetir
console.log(producto);
console.log(producto.replace('pulgadas', 'CURVO'));

//.slice para cortar
console.log(producto.slice(0, 10));

//.substring para cortar
console.log(producto.substring(0, 10));

const usuario = 'Inigo';
console.log(usuario.substring(0, 1));

//.charAt mas corto que substring
console.log(usuario.charAt(0));