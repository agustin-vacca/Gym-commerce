import React from "react";
import { BiUserCircle } from "react-icons/bi";
import logo from "../../cardigan.png";
import SearchBar from "../SearchBar/SearchBar";
import { Layout } from "./NavbarStyle";

export default function NavBar() {
  return (
    <Layout>
      <div className="SearchBarDiv">
        <img src={logo} alt="." width="70px" />
        <SearchBar />
        <h3 className="ThisIsLog">
          INGRESAR/REGISTRARSE <BiUserCircle size={40} />{" "}
        </h3>
      </div>
      <div className="divTwo">
        <div className="navButton">Inicio</div>
        <div className="navButton">Productos</div>
        <div className="navButton">Preguntas Frecuentes</div>
        <div className="navButton">Nosotros</div>
      </div>
    </Layout>
  );
}
