import { Header } from './components/header/Header.js';
import { Footer } from './components/footer/Footer.js';
import { route, navigate } from './router.js';
import { validateForm } from './components/Form/validacionForm.js';

function renderApp() {
  document.getElementById('app').innerHTML = `
    ${Header()}
    <main id="main-content"></main>
    ${Footer()}
  `;

  document.getElementById('nav-home').addEventListener('click', (e) => {
    e.preventDefault();
    navigate('/');
  });

  document.getElementById('nav-nosotros').addEventListener('click', (e) => {
    e.preventDefault();
    navigate('/nosotros');
  });

  document.getElementById('nav-contacto').addEventListener('click', (e) => {
    e.preventDefault();
    navigate('/contacto');
  });

  document.getElementById('menu-button').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });


  route();

  
}

// Asegurarnos de que el DOM esté cargado antes de renderizar la aplicación
document.addEventListener('DOMContentLoaded', renderApp);

