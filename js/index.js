const inputText = document.getElementById('inputText');
const btnText = document.getElementById('buttonText');

btnText.addEventListener('click', () => {
    localStorage.setItem('datosGuardados', JSON.stringify(inputText.value));
});