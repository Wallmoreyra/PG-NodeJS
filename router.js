// router.js
import { FormularioRegistro } from './components/Form/Form.js';
import { HomePage } from './components/HomePage.js';
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
  } else {
    mainContent.innerHTML = HomePage();
  }
}

window.addEventListener('popstate', route);

export { navigate, route };