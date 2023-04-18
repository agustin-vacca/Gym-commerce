import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cardiganletras from "../../cardigan-letras.png";
import { filterProductsByCategories } from "../../redux/actions.js";
import SearchBar from "../SearchBar/SearchBar";
import UserButton from "../UserButton/UserButton";
import "./NavBar.css";

export default function NavBar() {
  // DIV EMERGENTE
  const [open, setOpen] = useState(false);

  // FILTROS CATEGORIA
  const dispatch = useDispatch();

  const handleFilterCategories = (event) => {
    dispatch(filterProductsByCategories(event.target.value));
  };

  // FUNCION DROP
  function DropDownItem(props) {
    return (
      <li className="dropdownItem">
        <option onClick={(e) => handleFilterCategories(e)}>{props.text}</option>
      </li>
    );
  }

  //NAVBAR
  return (
    <div className="LayoutNavbar">
      <div className="divLogo">
        <Link to={"/home"}>
          <img className="Logo" src={cardiganletras} alt="logoCardigan" />
        </Link>
      </div>
      <div className="divconjuntos">
        <div className="divOne">
          <SearchBar />
          <div className="ThisIsLog">
            <UserButton />
          </div>
        </div>
        <div className="divTwo">
          <Link to={"/home"}>
            <div className="navButton">Inicio</div>
          </Link>
          <div>
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
                <DropDownItem text={"All"} />
                <DropDownItem text={"Maquinas"} />
                <DropDownItem text={"Mancuernas"} />
                <DropDownItem text={"Rack"} />
                <DropDownItem text={"Discos y Barras"} />
                <DropDownItem text={"Accesorios"} />
              </ul>
            </div>
          </div>
          <Link to="/consultas">
            <div className="navButton">Preguntas frecuentes</div>
          </Link>
          <Link to="/nosotros">
            <div className="navButton">Nosotros</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
