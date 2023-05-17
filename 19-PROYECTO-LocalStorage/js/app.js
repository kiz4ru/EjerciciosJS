
const formulario = document.querySelector('#formulario');
const listaTwee = document.querySelector('#lista-tweets');
let tweets = [];

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
    
}









function agregarTweet(e) {
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    if (tweet == '') {
        mostrarError('Tienes que poner algo')
        return;
    }

    const tweetObj = {
        id: Date.now(),
        Dato: tweet
    }

   //
   tweets = [...tweets, tweetObj];

   sincronizarStorage();

   crearHtml();

   formulario.reset();
}


function mostrarError(error) {
    const mensajeError = document.createElement('h1');
    mensajeError.textContent = error;

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

function crearHtml() {
    limpirarHtml();
    
    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('li');
            li.innerText = tweet.Dato;

            listaTwee.appendChild(li);

            li.appendChild(btnEliminar);

        })
    }
}


function limpirarHtml() {
    while (listaTwee.firstChild) {
        listaTwee.removeChild(listaTwee.firstChild);
    }
}

// Local Storage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Borrar tweet del DOM
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id );

    crearHtml();
}

// Mostrar los tweets al cargar
document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];

    crearHtml();
} );