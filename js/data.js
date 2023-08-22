const data = document.getElementById('data');

data.innerText = JSON.parse(localStorage.getItem('datosGuardados'));