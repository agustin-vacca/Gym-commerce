import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../cardiganRectangulo.png";
import { filterProductsByCategories } from "../../redux/actions.js";
import Carrito from "../Carrito/Carrito";
import SearchBar from "../SearchBar/SearchBar";
import UserButton from "../UserButton/UserButton";
import "./NavBar.css";

export default function NavBar() {
  // DIV EMERGENTE
  const [open, setOpen] = useState(false);

  // FILTROS CATEGORIA
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilterCategories = (event) => {
    dispatch(filterProductsByCategories(event.target.value));
    navigate("/catalogue");
  };

  // FUNCION DROP
  function DropDownItem(props) {
    return (
      <li className="dropdownItem">
        <option onClick={(e) => handleFilterCategories(e)}>{props.text}</option>
      </li>
    );
  }
  //CONSTANTE QUE RENDERIZA EL BTN DEL CARRITO
  const { isAuthenticated } = useAuth0();

  //CONSTANTE QUE ACTIVA O DESACTIVA EL BTN DEL CARRITO
  const [popupActive, setPopupActive] = useState(false);

  //NAVBAR
  return (
    <div className="LayoutNavbar">
      <div className="divLogo">
        <Link to={`/`}>
          <img className="Logo" src={logo} alt="." />
        </Link>
      </div>
      <div className="divconjuntos">
        <div className="divOne">
          <div className="searchBarDiv">
            {location.pathname === "/catalogue" && <SearchBar />}
          </div>
          <div className="userButtondiv">
            {isAuthenticated && (
              <>
                <BiCart
                  size={35}
                  onClick={() => {
                    setPopupActive(!popupActive);
                  }}
                />
                <Modal
                  isOpen={popupActive}
                  onRequestClose={() => setPopupActive(false)}
                  ariaHideApp={false}
                >
                  <Carrito
                    popupActive={popupActive}
                    setPopupActive={setPopupActive}
                  />
                </Modal>
              </>
            )}
          </div>
          <div className="userButtondiv">
            <UserButton />
          </div>
        </div>
        <div className="divTwo">
          <div className="navButton">
            <NavLink to="/home" className="nosotros">
              Inicio
            </NavLink>
          </div>
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
            <NavLink to="/preguntasfrecuentes" className="nosotros">
              Preguntas frecuentes
            </NavLink>
          </div>
          <div className="navButton">
            <NavLink to="/nosotros" className="nosotros">
              Nosotros
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
