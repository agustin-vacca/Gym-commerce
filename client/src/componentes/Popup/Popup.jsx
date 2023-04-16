import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { Popstyled } from "./PopupStyle";

function Popup({ popup, setPopup }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Popstyled>
      <span onClick={() => setPopup(!popup)}>
        <BiX className="btn-close" size={25} />
      </span>
      <div className="Form">
        <h2>Inicia sesion o registrate</h2>
        <p>Bienvenido</p>

        <div>
          <input
            className="inputs"
            onChange={(e) => handleChange(e)}
            type="text"
            value={inputs.name}
            name="name"
            placeholder="nombre"
          />
          <input
            className="inputs"
            onChange={(e) => handleChange(e)}
            type="text"
            value={inputs.email}
            name="email"
            placeholder="email"
          />
          <input
            className="inputs"
            onChange={(e) => handleChange(e)}
            type="text"
            value={inputs.password}
            name="password"
            placeholder="contraseña"
          />
          <button className="btn-submit" type="submit">
            Registrar usuario
          </button>
        </div>

        <hr />
        <p>Tambien puedes registrarte con:</p>
        <div>Google</div>
        <div>Facebook</div>
      </div>
    </Popstyled>
  );
}

export default Popup;
