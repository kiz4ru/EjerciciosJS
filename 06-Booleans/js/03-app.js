const autenticado = true;

if (autenticado) {
    console.log('El usuario esta autenticado');
} else {
    console.log('Inicia sesion');
    
}

//el operador ternario es una forma de simplificar el if else
//si autenticado es true entonces muestra el mensaje de usuario autenticado
//si autenticado es false entonces muestra el mensaje de inicia sesion
console.log(autenticado ? 'El usuario esta autenticado' : 'Inicia sesion');