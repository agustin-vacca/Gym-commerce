
//import React, { useEffect, useState } from "react";
import React, { useState } from , { useState };
from "react";
//import { Layout } from "./NavbarStyle";
import { BiUserCircle, BiX } from "react-icons/bi";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import logo from "../../cardigan.png";
import Popup from "../Ingreso_registro/Popup";
import SearchBar from "../SearchBar/SearchBar";

    //NAVBAR
    return (
    <div className="Layout">
        <div className="SearchBarDiv">
          <Link to={`/`}>
          <img src={logo} alt="." width="70px"/>
          </Link>
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
        <div className="divTwo">
          <div className="navButton">Inicio</div>

          <div>
            <div className="navButton" onClick={ () => {setOpen(!open)}}>
              <p>Productos</p>
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
              <ul>
                <DropDownItem text = {"Maquienas"} />
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
    )
} 

function DropDownItem(props){
  return(
    <li className="dropdownItem" > 
      <p> {props.text} </p>
    </li>
  )
}

