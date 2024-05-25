// router.js
import { FormularioRegistro } from './components/Form/Form.js';
import { validateForm } from './components/Form/validacionForm.js';
import { HomePage } from './components/home/HomePage.js';
import { NosotrosPage } from './components/nosotros/NosotrosPage.js';


function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  route();
}

function route() {
  const path = window.location.pathname;
  const mainContent = document.getElementById('main-content');

  if (path === '/nosotros') {
    mainContent.innerHTML = NosotrosPage();
  } else if (path === '/contacto') {
    mainContent.innerHTML = FormularioRegistro();
    const form = document.querySelector('#registroForm');
    const resetButton = document.getElementById('resetButton');

    if (form) {
      form.addEventListener('submit', (event) => {
        validateForm(event);
      });
    }

    if (resetButton) {
      resetButton.addEventListener('click', () => {
        document.getElementById('error-messages').innerHTML = '';
        document.getElementById('success-message').innerHTML = '';
        const contMessage2 = document.getElementById('cont-error-sus');
        contMessage2.classList.add('hidden');
      });
    }
    
  } else {
    mainContent.innerHTML = HomePage();
  }
}

window.addEventListener('popstate', route);

export { navigate, route };