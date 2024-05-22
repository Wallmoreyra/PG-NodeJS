import { navigate } from '../../router.js';

export function validateForm(event) {
    event.preventDefault();
    //console.log("se envio!!")
    //alert("hola como esas!!!!")

    //Obtencion de Datos del Formulario
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const userName = document.getElementById('userName').value.trim();
    const profileImage = document.getElementById('img').value.trim();
    const birthdate = document.getElementById('birthdate').value.trim();
    const password = document.getElementById('password').value.trim();
    const comfPassword = document.getElementById('password-conf').value.trim();

    // Extracción de valores de checkboxes y radio buttons
    const notificElement = document.querySelector('input[name="notific"]:checked');
    const notific = notificElement ? notificElement.value : null;

    const categOfGameElements = document.querySelectorAll('input[name="categOfGame"]:checked');
    const categOfGame = Array.from(categOfGameElements).map(el => el.value);
    
    let valid = true;
    let messages = [];
    // Validación del formulario

    const errorMessages = document.getElementById('error-messages');
    const successMessage = document.getElementById('success-message');
    errorMessages.innerHTML = ''; // Limpiar mensajes anteriores
    successMessage.innerHTML = ''; // Limpiar mensaje de éxito anterior
  
    // Validación del nombre
    const nameRegex = /^[a-z]+$/;
    if (name === '') {
      valid = false;
      messages.push('Nombre es requerido');
    } else if (!nameRegex.test(name)) {
      valid = false;
      messages.push('Nombre solo puede contener letras minúsculas sin espacios ni símbolos');
    }else if (name.length < 4) {
      valid = false;
      messages.push('El Nombre debe tener mas de 4 caracteres');
    }

    // Validación del apellido
    const surnameRegex = /^[a-z]+$/;
    if (surname === '') {
      valid = false;
      messages.push('Apellido es requerido');
    } else if (!surnameRegex.test(surname)) {
      valid = false;
      messages.push('Apellido solo puede contener letras minúsculas sin espacios ni símbolos');
    }else if (surname.length < 4) {
      valid = false;
      messages.push('El Apellido debe tener mas de 4 caracteres');
    }

    // Validación del nombre de usuario
    const userNameRegex = /^[a-zA-Z0-9]+$/;
    if (userName === '') {
      valid = false;
      messages.push('Nombre de Usuario es requerido');
    } else if (!userNameRegex.test(userName)) {
      valid = false;
      messages.push('Nombre de Usuario solo puede contener letras y números sin espacios ni símbolos');
    }else if (userName.length < 3) {
      valid = false;
      messages.push('El Nombre de usuario debe tener mas de 3 caracteres');
    }

    // Validación del tipo de imagen
    if (profileImage) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!validImageTypes.includes(profileImage.type)) {
        valid = false;
        messages.push('Archivo de imagen inválido. Solo se permiten JPG, PNG y WEBP');
      }
    }

    // Validación de password y confirmacion de password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (password === '') {
      valid = false;
      messages.push('La contraseña es requerida');
    } else if (!passwordRegex.test(password)) {
      valid = false;
      messages.push('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo');
    }

    if (comfPassword === '') {
      valid = false;
      messages.push('La confirmacion de password es requerida');
    } else if (comfPassword !== password) {
      valid = false;
      messages.push('Las contraseñas no pueden ser diferentes!!!');
    }

    // Validación de la fecha de nacimiento
     if (birthdate === '') {
        valid = false;
        messages.push('Fecha de Nacimiento es requerida');
      } else {
        const birthDateObj = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDifference = today.getMonth() - birthDateObj.getMonth();
        const dayDifference = today.getDate() - birthDateObj.getDate();
    
        // Ajustar la edad si la fecha actual es anterior a la fecha de nacimiento en el año actual
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
          age--;
        }
    
        if (age < 18) {
          valid = false;
          messages.push('Debes ser mayor de 18 años');
        }
      }

    // Validación de que al menos un checkbox de "Categoría de interés" esté seleccionado
    if (categOfGame.length === 0) {
      valid = false;
      messages.push('Debes seleccionar al menos una categoría de interés');
    }

    // Si hay errores, agregar mensajes al div de mensajes de error
    if (!valid) {
      messages.forEach(message => {
        errorMessages.innerHTML += `<p>${message}</p>`;
      });
    } else {
      successMessage.innerHTML = `<p>✔ Sus datos fueron ingresados de manera correcta</p><p>Bienvenido/a ${userName}</p>`;
    // Mostrar los datos ingresados!!!! menos el password
      console.log({
        name,
        surname,
        userName,
        birthdate,
        profileImage,
        categOfGame,
        notific
      });
    // Redirigir al usuario a la página de inicio después de 2 segundos
    setTimeout(() => {
      navigate('/');
    }, 4000);
      
    }
  }