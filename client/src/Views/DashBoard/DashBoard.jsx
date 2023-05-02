import React from "react";
import { AiFillHome, AiOutlineForm } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { Link } from "react-router-dom";
import logoImage from "../../cardiganRectangulo.png";
import { Sidebar } from "./DashBoardStyles";

const Dash = () => {
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
                  className={
                    label === "Estadisticas" ? "labelComponente" : "label"
                  }
                >
                  <div>{label}</div>
                  <div>{icon}</div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Sidebar>
  );
};

export default Dash;

const linksArray = [
  {
    label: "Home Page",
    icon: <AiFillHome size={30} />,
    to: "/home",
  },
  {
    label: "Reviews",
    icon: <ImStatsBars size={30} />,
    to: "/Admin/reviews",
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