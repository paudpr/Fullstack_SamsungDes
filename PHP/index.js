
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nombre = document.querySelector('input[name="NOMBRE"]').value;
    let apellido = document.querySelector('input[name="APELLIDO"]').value;
    let email = document.querySelector('input[name="EMAIL"]').value;
  
    if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '') {
      alert('Por favor, introduce un valor en todos los campos');
	}
	else{
      alert('El formulario ha sido enviado.'); 
      document.querySelector('form').reset();
    }
});

document.querySelector('form').addEventListener('submit', validateForm);
