// variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

//
cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);

}

//FUNCIONES
function agregarCurso(e){
    //Lo pongo para prevenir la accion default'(#)'
    e.preventDefault();

    //Solamente cuando el elemento al que estamos presionando contega 'agregar-carito'
    if (e.target.classList.contains('agregar-carrito')) {
        //
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

// Lee el contenido del html y extrae la info del curso
function leerDatosCurso(curso) {
    console.log(curso);

    //objeto con el contenido del curso actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
        
    
    }

    console.log(infoCurso)
}