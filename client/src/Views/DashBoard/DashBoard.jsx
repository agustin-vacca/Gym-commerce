import React from "react";
import { AiFillHome, AiOutlineForm } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { Link } from "react-router-dom";
import logoImage from "../../cardiganRectangulo.png";
import Cards from "../../componentes/AdminCards/Cards";
import { Sidebar } from "./DashBoardStyles";

const Dash = () => {
  const linksArray = [
    {
      label: "Home",
      icon: <AiFillHome size={30} />,
      to: "/home",
    },
    {
      label: "Estadisticas",
      icon: <ImStatsBars size={30} />,
      to: "/stats",
    },
    {
      label: "Productos",
      icon: <AiOutlineForm size={30} />,
      to: "/mypublic",
    },
    {
      label: "Comentarios",
      icon: <AiFillHome size={30} />,
      to: "/comments",
    },
    {
      label: "Crear Producto",
      icon: <AiFillHome size={30} />,
      to: "/form",
    },
  ];

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
                <div className="label">
                  <div>{label}</div>
                  <div>{icon}</div>
                </div>
              </Link>
            ))}
        </div>
        <div className="contenidoDash">
          <Cards />
        </div>
      </div>
    </Sidebar>
  );
};

export default Dash;
