import React, { useEffect } from "react";
import {
  AiFillHome,
  AiOutlineComment,
  AiOutlineForm,
  AiOutlineUser,
} from "react-icons/ai";
import { FaDumbbell } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Sidebar } from "../../Views/DashBoard/DashBoardStyles";
import logoImage from "../../cardiganRectangulo.png";
import { getAllProductsAdmin } from "../../redux/actions";
import Card from "../AdminCard/Card";

export default function Cards() {
  const dispatch = useDispatch();
  const adminProducts = useSelector((state) => state.adminProducts);

  useEffect(() => {
    dispatch(getAllProductsAdmin());
    // eslint-disable-next-line
  }, []);

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
                    label === "Productos" ? "labelComponente" : "label"
                  }
                >
                  <div>{label}</div>
                  <div>{icon}</div>
                </div>
              </Link>
            ))}
        </div>
        <div className="contenidoDash">
          {adminProducts &&
            adminProducts.map((el) => {
              return (
                <Card
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  isactive={el.isactive}
                  stock={el.stock}
                />
              );
            })}
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
