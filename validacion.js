
function isFieldEmpty(value) {
    return value.trim() === '';
  }
  
  function hasValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validateField(fieldValue, fieldName, errorMessage) {
    if (isFieldEmpty(fieldValue)) {
      alert(`Campo ${fieldName} es obligatorio`);
      return true;
    }
    return false;
  }
  
  function validateEmail(email) {
    if (!hasValidEmail(email)) {
      alert('e-mail inválido');
      return false;
    }
    return true;
  }
  
  function validarDatos(event) {
    event.preventDefault();
  
    const form = document.form;
  
    if (
      validateField(form.nombre.value, 'nombre', 'Campo nombre es obligatorio') ||
      validateField(form.email.value, 'e-mail', 'Campo e-mail es obligatorio') ||
      validateField(form.asunto.value, 'Asunto', 'Campo Asunto es obligatorio') ||
      validateField(form.mensaje.value, 'Mensaje', 'Campo Mensaje es obligatorio y debe contener máximo 50 caracteres') ||
      !validateEmail(form.email.value)
    ) {
      return;
    }
  
    // Si todas las validaciones son exitosas, aquí puedes enviar el formulario al servidor
  }
  
  document.querySelector('form').addEventListener('submit', validarDatos);
  

