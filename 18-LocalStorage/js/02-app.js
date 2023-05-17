const nombre = localStorage.getItem('nombre');
console.log(nombre);


//CONVERTIR UN STRING A UN OBJETO
const productoJSON = localStorage.getItem('producto');
const productoObjet = JSON.parse(productoJSON);
console.log(productoObjet);

//CONVERTIR UN STRING A UN ARRAY
const mesesJSON = localStorage.getItem('meses');
const mesesObjet = JSON.parse(mesesJSON);
console.log(mesesObjet);
