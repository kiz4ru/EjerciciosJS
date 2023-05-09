const accountsList = document.querySelector("#accounts-list");
const loginButton = document.querySelector("#login");
const useAnotherAccountButton = document.querySelector("#use-another-account");
const deleteAccountButton = document.querySelector("#delete-account");

let accounts = [];

// Función que carga los datos de las cuentas desde el archivo JSON
function loadAccounts() {
  fetch("accounts.json")
    .then(response => response.json())
    .then(data => {
      accounts = data;
      renderAccounts();
    });
}


// Función que muestra las cuentas en la lista
function renderAccounts() {
  accounts.forEach(account => {
    const accountItem = document.createElement("li");
    accountItem.textContent = account.correo;
    accountsList.appendChild(accountItem);
  });
}



// Primero, agregamos una cuenta al localStorage si no existe ya
if (!localStorage.getItem('accounts1')) {
    const accounts1 = [
      {
        correo: 'mi_correo@example.com',
        password: 'mi_contraseña',
        mensajes: [
          {
            remitente: 'amigo@example.com',
            asunto: '¡Hola!',
            mensaje: '¿Cómo estás?'
          }
        ]
      }
    ];
    localStorage.setItem('accounts1', JSON.stringify(accounts1));
  }
  
  // Luego, obtenemos las cuentas del localStorage
  const accounts1 = JSON.parse(localStorage.getItem('accounts1'));
  
  // Mostramos las cuentas en la lista de opciones
  const accountList = document.getElementById('accountList');
  accounts1.forEach((account, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = account.correo;
    accountList.appendChild(option);
  });
  
  // Cuando se seleccione una cuenta, la guardamos en sessionStorage y redirigimos al usuario a la página de Gmail
  accountList.addEventListener('change', () => {
    const selectedAccountIndex = accountList.value;
    sessionStorage.setItem('selectedAccountIndex', selectedAccountIndex);
    window.location.href = './gmail.html';
  });

  

// Función que muestra un mensaje para introducir los datos de otra cuenta
function promptAccountData() {
    const email = prompt("Introduce el correo de la cuenta:");
    const password = prompt("Introduce la contraseña de la cuenta:");
    if (email && password) {
      // Agregamos la cuenta al array de cuentas
      accounts1.push({
        correo: email,
        password: password,
        mensajes: []
      });
      // Guardamos el array de cuentas en el localStorage
      localStorage.setItem('accounts1', JSON.stringify(accounts1));
      // Recargamos la página para mostrar la nueva cuenta en la lista
      window.location.reload();
    }
  }
// Funcion para iniciar sesion
function login() {
    const selectedAccountIndex = accountList.value;
    const selectedAccount = accounts1[selectedAccountIndex];
    const password = prompt("Introduce la contraseña de la cuenta:");
    if (password === selectedAccount.password) {
      sessionStorage.setItem('selectedAccountIndex', selectedAccountIndex);
      window.location.href = './gmail.html';
    } else {
      alert("Contraseña incorrecta");
    }
  }




  
  // Agregamos un event listener al botón de "Iniciar sesión con otra cuenta" para que llame a la función promptAccountData()
  useAnotherAccountButton.addEventListener("click", promptAccountData);
  
  // Agregamos un event listener al botón de "Eliminar cuenta" para que elimine la cuenta seleccionada de la lista
  deleteAccountButton.addEventListener("click", () => {
    const selectedAccountIndex = accountList.value;
    accounts1.splice(selectedAccountIndex, 1);
    localStorage.setItem('accounts1', JSON.stringify(accounts1));
    window.location.reload();
  });
  
  // Llamamos a la función loadAccounts() para cargar las cuentas desde el archivo JSON y mostrarlas en la lista
  loadAccounts();

