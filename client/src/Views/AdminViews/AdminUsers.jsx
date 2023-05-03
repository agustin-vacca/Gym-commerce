import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiOutlineComment,
  AiOutlineForm,
  AiOutlineUser,
} from "react-icons/ai";
import { FaDumbbell } from "react-icons/fa";
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
            <div key="title" className="title">
              <div key="id" className="eachTitleId">
                <p key="id">Id</p>
              </div>
              <div key="nombre" className="eachTitle">
                <p key="nombre">Nombre</p>
              </div>
              <div key="mail" className="eachTitle">
                <p key="mail">Mail</p>
              </div>
              <div key="admin" className="eachTitleAdmin">
                <p key="admin">Admin</p>
              </div>
            </div>
            <div className="marcoCards">
              {usuarios.map((e) => {
                return (
                  <div key={e.id} className="userCards">
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
    label: "Reviews",
    icon: <AiOutlineComment size={30} />,
    to: "/Admin/reviews",
  },
  {
    label: "Productos",
    icon: <FaDumbbell size={30} />,
    to: "/Admin/myProducts",
  },
  {
    label: "Crear Producto",
    icon: <AiOutlineForm size={30} />,
    to: "/Admin/form",
  },
  {
    label: "Usuarios",
    icon: <AiOutlineUser size={30} />,
    to: "/Admin/usuarios",
  },
];
