// router.js
import { HomePage } from './components/HomePage.js';


function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  route();
}

function route() {
  const path = window.location.pathname;
  const mainContent = document.getElementById('main-content');

  if (path === '/nosotros') {
    mainContent.innerHTML = '<h1>About Page</h1>';
  } else if (path === '/contacto') {
    mainContent.innerHTML = '<h1>Contact Page</h1>';
  } else {
    mainContent.innerHTML = HomePage();
  }
}

window.addEventListener('popstate', route);

export { navigate, route };