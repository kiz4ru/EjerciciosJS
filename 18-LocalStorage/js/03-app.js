localStorage.removeItem('nombre');

//ACTULIZAR UN REGISTRO..

const mesesArray = JSON.parse(localStorage.getItem('meses'));

mesesArray.push('Marzo');
console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));

//LIMPIAR TODO EL LOCALSTORAGE
localStorage.clear();