import React from "react";
import { Popstyled } from "./PopupStyle";

function Popup() {
  return (
    <Popstyled>
      <div className="popup">
        <h2>¡Bienvenido!</h2>
        <p> Ingresa tu correo electrónico:</p>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn-open">Ingresar</button>
        </form>
      </div>
    </Popstyled>
  );
}

export default Popup;
