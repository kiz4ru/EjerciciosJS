const producto = 'Monitor 20 pulgadas';

// .repetear te va a repetir el string

const texto = 'en promocion'.repeat(3);

//const texto = 'en promocion'.repeat(2.4);
// si el numero es decimal, lo redondea

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// split divide un string en un array
const actividad = 'Estoy aprendiendo JavaScript moderno';
console.log(actividad.split(" "));
//coger supueta lista de una tienda
const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = 'Aprendiendo JavaScript ';
console.log(tweet.split("#"));