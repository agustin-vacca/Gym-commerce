import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation,NavLink } from "react-router-dom";
import "./NavBar.css";
import { filterProductsByCategories } from "../../redux/actions";
import { useDispatch } from "react-redux";
import logo from "../../cardigan.png";
import { BiUserCircle } from "react-icons/bi";

export default function NavBar() {
  // DIV EMERGENTE
  const [open, setOpen] = useState(false);

  // FILTROS CATEGORIA
  const dispatch = useDispatch();
  const location = useLocation();

  const handleFilterCategories = (event) => {
    dispatch(filterProductsByCategories(event.target.value));
  };

  // FUNCION DROP
  function DropDownItem(props) {
    return (
      <li className="dropdownItem">
        <option onClick={(e) => handleFilterCategories(e)}>
          {props.text}
        </option>
      </li>
    );
  }

  //NAVBAR
  return (
    <div className="LayoutNavbar">

        <div className="divOne">
          <Link to={`/`}>
          <img src={logo} alt="." width="70px"/>
          </Link>

          <div className="searchBarDiv">{ location.pathname === "/home" && <SearchBar /> }
          </div>

          <h3 className="ThisIsLog" >INGRESAR/REGISTRARSE <BiUserCircle size={40}/> </h3>
        </div>
        <div className="divTwo">
          <div className="navButton"><NavLink to="/home" className="nosotros">Inicio</NavLink></div>
          <div>
            <div className="navButton" onClick={ () => {setOpen(!open)}}>
              Productos
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
              <ul>
                <DropDownItem text = {"All"} />
                <DropDownItem text = {"Maquinas"} />
                <DropDownItem text = {"Mancuernas"} />
                <DropDownItem text = {"Rack"} />
                <DropDownItem text = {"Discos y Barras"} />
                <DropDownItem text = {"Accesorios"} />
              </ul>
            </div>
          </div>
          <div className="navButton"><NavLink to="/preguntasfrecuentes" className="nosotros">Preguntas frecuentes</NavLink></div>
        <div className="navButton"><NavLink to ="/nosotros" className="nosotros">Nosotros</NavLink></div>
      
        </div>
      </div>
  );
}