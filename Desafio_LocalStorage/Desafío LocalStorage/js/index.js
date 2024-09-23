// Obtengo el input y el botón
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// Añado evento al botón para guardar el valor en localStorage
buttonText.addEventListener('click', () => {
    const textValue = inputText.value; // Obtengo el valor del input
    localStorage.setItem('storedText', textValue); // Guardo el valor en localStorage
    alert('¡Dato guardado en localStorage!');
});