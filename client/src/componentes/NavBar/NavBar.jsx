import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../cardigan.png";
import { filterProductsByCategories } from "../../redux/actions";
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
        <option onClick={(e) => handleFilterCategories(e)}>
          {" "}
          {props.text}{" "}
        </option>
      </li>
    );
  }

  //NAVBAR
  return (
    <div className="LayoutNavbar">
      <div className="divOne">
        <img src={logo} alt="." width="70px" />
        <SearchBar />
        <div className="ThisIsLog">
          {/* <BiUserCircle size={40} /> */}
          <UserButton />
        </div>
      </div>
      <div className="divTwo">
        <div className="navButton">Inicio</div>
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
        <div className="navButton">
          <Link to="/consultas" className="nosotros">
            Preguntas frecuentes
          </Link>
        </div>
        <div className="navButton">
          <Link to="/nosotros" className="nosotros">
            Nosotros
          </Link>
        </div>
      </div>
    </div>
  );
}
