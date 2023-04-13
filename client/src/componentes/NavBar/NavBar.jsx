import React from "react";
import { Layout } from "./NavBarStyle";
import SearchBar from "../SearchBar/SearchBar"
import logo from "../../images/Logo.png"


export default function NavBar(){
    return (
    <Layout>
        <div className="SearchBarDiv">
          <img src={logo} alt="." width="70px"/>
          <SearchBar />
          <h3 className="ThisIsLog">INGRESAR/REGISTRARSE</h3>
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