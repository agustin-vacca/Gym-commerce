import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiFillHome, AiOutlineForm } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../../cardiganRectangulo.png";
import ReviewsCard from "../../componentes/Admin/ReviewsCard/ReviewsCard";
import { getReviews } from "../../redux/actions";
import { Sidebar } from "../DashBoard/DashBoardStyles";
import { Componente } from "./AdminReviewsStyles";

const Container = styled.div`
  background: #808080;
  border-radius: 15px;
  max-height: 600px;
  min-height: 600px;
  overflow-y: auto;
  margin-left: 10%;
  margin-right: 10%;
`;

const Recuadros = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20%;
  border-bottom: 1px solid black;
  margin: 3%;
  color: black;
`;

export default function AdminReviews() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);

  const [change, setChange] = useState(false);

  useEffect(() => {
    dispatch(getReviews());
    // eslint-disable-next-line
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
                  className={label === "Reviews" ? "labelComponente" : "label"}
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
              <div key="id" className="eachTitleId">
                <p key="id">Id</p>
              </div>
              <div key="nombre" className="eachTitle">
                <p key="nombre">Opinion</p>
              </div>
              <div key="mail" className="eachTitle">
                <p key="mail">Rating</p>
              </div>
              <div key="admin" className="eachTitleAdmin">
                <p key="admin">Estado</p>
              </div>
            </div>
            <div className="marcoCards">
              {reviews.map((e) => {
                return (
                  <div className="userCards">
                    <ReviewsCard
                      key={e.id}
                      id={e.id}
                      //user={e.user}
                      opinion={e.opinion}
                      rating={e.rating}
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
