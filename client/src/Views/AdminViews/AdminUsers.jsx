import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineForm } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoImage from "../../cardiganRectangulo.png";
import UserCard from "../../componentes/Admin/UserCard/UserCard";
import { getUsers } from "../../redux/actions";
import { Sidebar } from "../DashBoard/DashBoardStyles";
import { Componente } from "./AdminUsersStyles";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.users);

  const [change, setChange] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [change]);

  return (
    <Sidebar>
      <div className="Logo">
        <img src={logoImage} alt="logoImg" />
      </div>
      <div className="Contenido">
        <div className="DivLabelEmergente">
          {linksArray &&
            linksArray.map(({ label, icon, to }) => (
              <Link className="linklabel" to={to} key={label}>
                <div
                  className={label === "Usuarios" ? "labelComponente" : "label"}
                >
                  <div>{label}</div>
                  <div>{icon}</div>
                </div>
              </Link>
            ))}
        </div>
        <div className="contenidoDash">
          <Componente>
            <div className="title">
              <div className="eachTitleId" key="id">
                <p key="id">Id</p>
              </div>
              <div className="eachTitle" key="nombre">
                <p key="nombre">Nombre</p>
              </div>
              <div className="eachTitle" key="mail">
                <p key="mail">Mail</p>
              </div>
              <div className="eachTitleAdmin" key="admin">
                <p key="admin">Admin</p>
              </div>
            </div>
            <div className="marcoCards">
              {usuarios.map((e) => {
                return (
                  <div className="userCards">
                    <UserCard
                      key={e.id}
                      id={e.id}
                      name={e.name}
                      email={e.email}
                      admin={e.admin}
                      setChange={setChange}
                    />
                  </div>
                );
              })}
            </div>
          </Componente>
        </div>
      </div>
    </Sidebar>
  );
}

const linksArray = [
  {
    label: "Home Page",
    icon: <AiFillHome size={30} />,
    to: "/home",
  },
  {
    label: "Estadisticas",
    icon: <ImStatsBars size={30} />,
    to: "/Admin/dashboard",
  },
  {
    label: "Productos",
    icon: <AiOutlineForm size={30} />,
    to: "/Admin/myProducts",
  },
  {
    label: "Crear Producto",
    icon: <AiFillHome size={30} />,
    to: "/Admin/form",
  },
  {
    label: "Usuarios",
    icon: <AiFillHome size={30} />,
    to: "/Admin/usuarios",
  },
];
