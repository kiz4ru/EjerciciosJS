// variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

//
cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //Reseteamos el arreglo
        limpiarHTML(); //Eliminamos todo el html
    });

}

//FUNCIONES
function agregarCurso(e){
    //Lo pongo para prevenir la accion default'(#)'
    e.preventDefault();

    //Solamente cuando el elemento al que estamos presionando contga 'agregar-carito'
    if (e.target.classList.contains('agregar-carrito')) {
        //console.log('Agregando al carrito');
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

// Eliminar un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        console.log(articulosCarrito);
        carritoHTML(); // Iterar sobre el carrito y mostrar su html
    }
}



// Lee el contenido del html y extrae la info del curso
function leerDatosCurso(curso) {
    //console.log(curso);

    //objeto con el contenido del curso actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //REvisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if (existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            } else {
                return curso; //retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
        
    
    }
   
    

    //console.log(infoCurso)

    console.log(articulosCarrito);
    carritoHTML();
}


//Muestra el carrito de compras en el html
function carritoHTML() {
    
        //Limpiar el html para los doblicados
        limpiarHTML();
        
        //Recorre el carrito y genera el html
        articulosCarrito.forEach( curso => {
            const {imagen, titulo, precio, cantidad, id} = curso;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${imagen}" width="100">
                </td>
    
                <td>${titulo}</td>
    
                <td>${precio}</td>
    
                <td>${cantidad}</td>
    
                <td>
                    <a href="#" class="borrar-curso" data-id="${id}"> X </a>
                </td>
            `;
    
            //Agrega el html del carrito en el tbody
            contenedorCarrito.appendChild(row);
        });

}

function limpiarHTML() {

    //FORMA LENTA
    //contenedorCarrito.innerHTML = '';

    //FORMA CORRECTA
    /**
     * Mientras el contenedorCarrito tenga un hijo, se va a ejecutar el while
     * y va a ir eliminando los hijos
     */
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

