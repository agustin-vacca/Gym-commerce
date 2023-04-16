import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import imagen from "../../cardigan.png";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  //NAVBAR
  return (
    <div className="LayoutNavbar">
      <div className="divOne">
        <Link to={`/`}>
          <img src={imagen} alt="." width="70px" />
        </Link>
        <SearchBar />
        <h3 className="ThisIsLog">
          INGRESAR/REGISTRARSE <BiUserCircle size={40} />
          {""}
        </h3>
      </div>
      <div className="divTwo">
        <div className="navButton">Inicio</div>
        <div className="dropDownContainer">
          <div
            className="navButton"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Productos
          </div>
          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <ul>
              <DropDownItem text={"Maquienas"} />
              <DropDownItem text={"Mancuernas"} />
              <DropDownItem text={"Rack"} />
              <DropDownItem text={"Discos y Barras"} />
              <DropDownItem text={"Accesorios"} />
            </ul>
          </div>
        </div>
        <div className="navButton">Preguntas Frecuentes</div>
        <div className="navButton">Nosotros</div>
      </div>
    </div>
  );
}

function DropDownItem(props) {
  return (
    <li className="dropdownItem">
      <p> {props.text} </p>
    </li>
  );
};
