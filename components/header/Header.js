// components/Header.js
export function Header() {
    return `
      <header class="header">
        <div class="header-container">
          <a href="/" class="icono-games"><img src="./utils/pngegg.png" alt="logo_games"></a>
          <nav>
            <ul class="nav-links">
              <li><a href="#" id="nav-home">Home</a></li>
              <li><a href="#" id="nav-nosotros">Nosotros</a></li>
              <li><a href="#" id="nav-contacto">Registro</a></li>
            </ul>
            <button class="menu-button" id="menu-button">Menu</button>
          </nav>
        </div>
      </header>
    `;
  }