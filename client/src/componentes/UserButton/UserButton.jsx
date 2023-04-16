import React, { useState } from "react";
import { HiMenu, HiOutlineUserCircle } from "react-icons/hi";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";
import { UserBtnDiv } from "./UserButtonStyled";

const UserButton = () => {
  const [active, setActive] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isAuthenticated, SetAuthenticated] = useState(false);

  return (
    <UserBtnDiv>
      <div onClick={() => setActive(!active)}>
        <HiOutlineUserCircle size={25} />
      </div>
      <div className="Menu" style={active ? null : { display: "none" }}>
        {isAuthenticated ? (
          <ul className="Ul">
            <div>
              <img src={HiMenu} alt="User_image" />
              <h2>User_name</h2>
              <h2>User.family_name</h2>
            </div>
            <hr />
            <Link to="/dashboard">
              <li className="Li" onClick={() => setActive(!active)}>
                Dashboard
              </li>
            </Link>
            <hr />
            <li className="Li">
              <Link to="/form" onClick={() => setActive(!active)}>
                Crear producto
              </Link>
            </li>
            <li className="Li">
              <Link to="/home" onClick={() => SetAuthenticated(false)}>
                Cerrar Sesion
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="Ul">
            <li
              className="Li"
              onClick={() => {
                setPopup(!popup);
                setActive(false);
              }}
            >
              <Modal isOpen={popup} onRequestClose={() => setPopup(false)}>
                <Popup popup={popup} setPopup={setPopup} />
              </Modal>
              Iniciar Sesion/Registrarse
            </li>
            <hr />
            <li className="Li">Ayuda</li>
          </ul>
        )}
      </div>
    </UserBtnDiv>
  );
};
export default UserButton;

/* : isAuthenticated === "User" ? (
          <ul>
            <div>
              <img
                src={user.picture ? user.picture : HiMenu}
                alt={"image_active"}
              />
              <h2>{user.given_name}</h2>
              <h2>{user.family_name}</h2>
            </div>
            <hr />
            <li>
              <Link to="/compras">Mis Compras</Link>
            </li>
            <li
              onClick={() => {
                logout();
              }}
            >
              Cerrar Sesion
            </li>
          </ul>
        */
