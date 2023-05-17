
sessionStorage.setItem('nombre', 'inigo');

const productos = {
    nombre: "tele",
    producto: "movi",
    precio: 300
}

//PASAR UN OBJETO A UN STRING
const productoString = JSON.stringify(productos);
localStorage.setItem('producto', productoString);
////PASAR UN ARRAY A UN STRING
const meses = ['enero', 'febrero'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);