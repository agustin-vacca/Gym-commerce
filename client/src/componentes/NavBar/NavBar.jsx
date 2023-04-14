import React, { useState } from "react";
import { BiUserCircle, BiX } from "react-icons/bi";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Popup from "../Ingreso_registro/Popup";
import SearchBar from "../SearchBar/SearchBar";
import { Layout } from "./NavbarStyle";

export default function NavBar() {
  const [popup, setPopup] = useState(false);
  return (
    <Layout>
      <div className="BarDiv">
        <Link to={`/`}>{/* <img src={logo} alt="." width="70px" /> */}</Link>
        <div className="search">
          <SearchBar />
        </div>
        <div className="ThisIsLog" onClick={() => setPopup(true)}>
          <h3>
            INGRESAR/REGISTRARSE <BiUserCircle size={40} />
          </h3>
          <Modal isOpen={popup} onRequestClose={() => setPopup(false)}>
            <Popup />
            <BiX
              size={40}
              className="btnclose"
              onClick={() => setPopup(false)}
            />
          </Modal>
        </div>
      </div>
      <div className="divTwo">
        <Link className="link" to="/home">
          <div className="navButton">Inicio</div>
        </Link>
        <Link className="link" to="/home">
          <div className="navButton">Productos</div>
        </Link>
        <Link className="link" to="/home">
          <div className="navButton">Preguntas Frecuentes</div>
        </Link>
        <Link className="link" to="/home">
          <div className="navButton">Nosotros</div>
        </Link>
      </div>
    </Layout>
  );
}
