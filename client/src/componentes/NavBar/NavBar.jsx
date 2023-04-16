<<<<<<< HEAD
import React from "react";
//import { BiUserCircle } from "react-icons/bi";
import logo from "../../cardigan.png";
import SearchBar from "../SearchBar/SearchBar";
import UserButton from "../UserButton/UserButton";
import { Layout } from "./NavbarStyle";
import { Link } from "react-router-dom";
import "./NavBar.css";
=======
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar"
import logo from "../../cardigan.png"
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import './NavBar.css';
import { filterProductsByCategories } from "../../redux/actions.js"
import { useDispatch } from "react-redux";
>>>>>>> 531c3b52f3cf62661d178815589e0c41ad287216

export default function NavBar(){
    // DIV EMERGENTE
    const [open, setOpen] = useState(false);

    // FILTROS CATEGORIA
    const dispatch = useDispatch()

    const handleFilterCategories = (event) => {
      dispatch(filterProductsByCategories(event.target.value))
     }
     
    // FUNCION DROP 
    function DropDownItem(props){
      return(
      <li className="dropdownItem" > 
        <option onClick={ e => handleFilterCategories(e)} > {props.text} </option>
      </li>
      )
    }

    //NAVBAR
    return (
    <div className="LayoutNavbar">
        <div className="divOne">
          <Link to={`/`}>
          <img src={logo} alt="." width="70px"/>
          </Link>
          <SearchBar />
          <h3 className="ThisIsLog" >INGRESAR/REGISTRARSE <BiUserCircle size={40}/> </h3> 
        </div>
        <div className="divTwo">
          <div className="navButton">Inicio</div>
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
          <div className="navButton">Preguntas Frecuentes</div>
          <div className="navButton">Nosotros</div>
        </div>
      </div>
<<<<<<< HEAD

      <div className="divTwo">
        <div className="navButton">Inicio</div>
        <div className="navButton">Productos</div>
        <div className="navButton"><Link to="/consultas" className="nosotros">Preguntas frecuentes</Link></div>
        <div className="navButton"><Link to ="/nosotros" className="nosotros">Nosotros</Link></div>
      </div>
    </Layout>
=======
>>>>>>> 531c3b52f3cf62661d178815589e0c41ad287216
  );
}

