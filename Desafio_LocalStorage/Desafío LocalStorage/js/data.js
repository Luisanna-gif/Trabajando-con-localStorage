// Obtengo el dato guardado en localStorage
const storedText = localStorage.getItem('storedText');

// Muestro el dato en el elemento con id 'data'
document.getElementById('data').textContent = storedText ? storedText : 'No hay datos guardados.';