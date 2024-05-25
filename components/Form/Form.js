export function FormularioRegistro() {
    return `
      <section class="cont-regristro">

        <h1>Registro de Usuario!!</h1>

        <div class="cont-form-error">
        
          <div class="cont-reg-objeto hidden" id="cont-error-sus">
            <div id="error-messages" class="cont-de-errores"></div>
            <div id="success-message" class="cont-de-succese"></div>
          </div>

          <div class="cont-reg-objeto">
            <form id="registroForm" class="cont-formulario" >
            
              <div class="cont-form-item">
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name">
              </div>

              <div class="cont-form-item">
                <label for="surname">Apellido</label>
                <input type="text" id="surname" name="surname">
              </div>

              <div class="cont-form-item">
                <label for="email">Correo electronico:</label>
                <input type="email" id="email" name="email">
              </div>

              <div class="cont-form-item">
                <label for="userName">Nombre de Usuario</label>
                <input type="text" id="userName" name="userName">
              </div>

              <div class="cont-form-item">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password">
              </div>

              <div class="cont-form-item">
                <label for="password-conf">Confirmacion de password:</label>
                <input type="password" id="password-conf" name="password-conf">
              </div>

              <div class="cont-form-item">
                <label for="birthdate">Fecha de Nacimiento</label>
                <input type="date" id="birthdate" name="birthdate">
              </div>

              <div class="cont-form-item ">
                <label for="img">Imagen</label>
                <input type="text" id="img" name="img">
              </div>

              <div class="cont-form-item checkbox-group">
                <label class="checkbox-title">Categoria de interés:</label>
                <br>
                <div class="checkbox-container">
                  <div class="checkbox-item">
                    <input type="checkbox" id="rpg" name="categOfGame" value="RPG">
                    <label for="rpg">RPG</label>
                  </div>
                  <div class="checkbox-item">
                    <input type="checkbox" id="accion" name="categOfGame" value="accion">
                    <label for="accion">Acción</label>
                  </div>
                  <div class="checkbox-item">
                    <input type="checkbox" id="aventura" name="categOfGame" value="aventura">
                    <label for="aventura">Aventura</label>
                  </div>
                  <div class="checkbox-item">
                    <input type="checkbox" id="arcade" name="categOfGame" value="arcade">
                    <label for="arcade">Arcade</label>
                  </div>
                  <div class="checkbox-item">
                    <input type="checkbox" id="deportivo" name="categOfGame" value="deportivo">
                    <label for="deportivo">Deportivo</label>
                  </div>
                  <div class="checkbox-item">
                    <input type="checkbox" id="estrategia" name="categOfGame" value="estrategia">
                    <label for="estrategia">Estrategia</label>
                  </div>
                  <div class="checkbox-item">
                    <input type="checkbox" id="simulacion" name="categOfGame" value="simulacion">
                    <label for="simulacion">Simulación</label>
                  </div>
                  <div class="checkbox-item">
                    <input type="checkbox" id="musicales" name="categOfGame" value="musicales">
                    <label for="musicales">Musicales</label>
                  </div>
                </div>
              </div>

              <div class="cont-form-item radio-group">
                <label>Recibir Notificaciones:</label><br>
                <div class="radiobutton-container">
                  <div class="radio-item">
                    <input type="radio" id="notific-yes" name="notific" value="true">
                    <label for="notific-yes">Sí</label>
                  </div>
                  <div class="radio-item">
                    <input type="radio" id="notific-no" name="notific" value="false">
                    <label for="notific-no">No</label>
                  </div>
                </div>
              </div>

              <div class="cont-form-item cont-button-sub">
                <input type="reset" id="resetButton" value="Borrar">
                <input type="submit" value="Enviar">
              </div>

            </form>
          </div>
        </div>
      </section>
    `;
  }