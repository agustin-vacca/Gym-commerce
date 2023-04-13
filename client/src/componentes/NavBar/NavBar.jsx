import React from "react";
import { Layout } from "./NavBarStyle";
import SearchBar from "../SearchBar/SearchBar"
import logo from "../../cardigan.png"
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
    <Layout>
        <div className="SearchBarDiv">
          <Link to={`/`}>
          <img src={logo} alt="." width="70px"/>
          </Link>
          <SearchBar />
          <h3 className="ThisIsLog">INGRESAR/REGISTRARSE <BiUserCircle size={40}/> </h3> 
        </div>
        <div className="divTwo">
          <div className="navButton">Inicio</div>
          <div className="navButton">Productos</div>
          <div className="navButton">Preguntas Frecuentes</div>
          <div className="navButton">Nosotros</div>
        </div>
    </Layout>
    )
} 