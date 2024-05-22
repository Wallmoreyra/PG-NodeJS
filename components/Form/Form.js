export function FormularioRegistro() {
    return `
      <section class="cont-regristro">
      
        <div class="cont-reg-objeto">
          <p>Aca va el form de registro de Usuario!!!!!</p>
          <h1>Registro de usuario con 5 campos como minimo checkbox o radiobutton minimo una imagen minimo validacion con JS</h1>
          <div id="error-messages" class="cont-de-erroes"></div>
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
              <label for="userName">Nombre de Usuario</label>
              <input type="text" id="userName" name="userName">
            </div>

            <div class="cont-form-item">
              <label for="birthdate">Fecha de Nacimiento</label>
              <input type="date" id="birthdate" name="birthdate">
            </div>

            <div class="cont-form-item ">
              <label for="img">Imagen</label>
              <input type="text" id="img" name="img">
            </div>




            <div class="cont-form-item">
              <input type="reset" id="resetButton" value="Borrar">
              <input type="submit" value="Enviar">
            </div>

          </form>
        </div>

      </section>
    `;
  }