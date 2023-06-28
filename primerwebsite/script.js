function showAlert() {

    alert("Holiis,esto es una alerta de JavaScripts");
    
}

const boton = document.getElementById("miboton");

 boton.addEventListener("click", function handleClick(){

    alert("Le has dado click excelente trabajo");
        
});

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }