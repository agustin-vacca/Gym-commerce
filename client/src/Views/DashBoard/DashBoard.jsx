import React from "react";
import {
  AiFillHome,
  AiOutlineComment,
  AiOutlineForm,
  AiOutlineUser,
} from "react-icons/ai";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../../cardiganRectangulo.png";
import { LandingDiv, Sidebar } from "./DashBoardStyles";

const Dash = () => {
  return (
    <Sidebar>
      <div className="Logo">
        <img src={logoImage} alt="logoImg" />
      </div>
      <div>
        <LandingDiv>
          {linksArray &&
            linksArray.map(({ label, icon, to }) => (
              <div key={label} className="card">
                <div className="face front">
                  <div className="icon">{icon}</div>
                  <div className="tag">{label}</div>
                </div>
                <div className="face back">
                  <div className="letters">
                    <Link className="linklabel" to={to} key={label}>
                      <h3 className="entrada">IR</h3>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </LandingDiv>
      </div>
    </Sidebar>
  );
};

export default Dash;

const linksArray = [
  {
    label: "Home Page",
    icon: <AiFillHome size={50} />,
    to: "/home",
  },
  {
    label: "Reviews",
    icon: <AiOutlineComment size={50} />,
    to: "/Admin/reviews",
  },
  {
    label: "Productos",
    icon: <FaDumbbell size={50} />,
    to: "/Admin/myProducts",
  },
  {
    label: "Crear Producto",
    icon: <AiOutlineForm size={50} />,
    to: "/Admin/form",
  },
  {
    label: "Usuarios",
    icon: <AiOutlineUser size={50} />,
    to: "/Admin/usuarios",
  },
];
