import React from "react";
//import { BiUserCircle } from "react-icons/bi";
import logo from "../../cardigan.png";
import SearchBar from "../SearchBar/SearchBar";
import UserButton from "../UserButton/UserButton";
import { Layout } from "./NavbarStyle";

export default function NavBar() {
  return (
    <Layout>
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
        <div className="navButton">Productos</div>
        <div className="navButton">Preguntas Frecuentes</div>
        <div className="navButton">Nosotros</div>
      </div>
    </Layout>
  );
}
