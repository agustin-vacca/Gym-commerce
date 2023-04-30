import React from "react";
import "./Nosotros.css";
import { Layout } from "../Home/commonStyles";
import Footer from "../../componentes/Footer/Footer";
import NavBar from "../../componentes/NavBar/NavBar";
import imagen from "../../cardiganRectangulo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import insta from "./imagenes/instagram.svg";
import twitter from "./imagenes/twitter.svg";
import twitch from "./imagenes/twitch.svg";
import agus from "./imagenes/agus.png";
import santi from "./imagenes/santi.png";
import fred from "./imagenes/fred.png";
import moa from "./imagenes/moa.png";
import javier from "./imagenes/javier.png";
import brian from "./imagenes/brian.png";

const ImgGrande = styled.img`
  width: 15%;
`;
const AboutUsContainer = styled.div`
  border: 30px solid #f6f6f6;
  background: #c7c7c7;
`;
const NameAndLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8%;
  padding: 2%;
`;
const AboutUsText = styled.div`
  align-items: center;
  justify-content: center;
  padding: 1% 5% 1% 5%;
`;
const ImgLogo = styled.img`
  border-radius: 8px;
`;
export default function Nosotros1() {
  return (
    <Layout>
      <NavBar />
      <AboutUsContainer>
        <NameAndLogo>
          <ImgLogo className="LogoAboutUs" src={imagen} alt="Logo Cardigan" />
          <h1>¡Bienvenidos a nuestra tienda de artículos de gimnasio!</h1>
        </NameAndLogo>
        <AboutUsText>
          <p>
            En nuestro sitio web encontrarás una amplia variedad de productos
            diseñados para ayudarte a alcanzar tus metas de fitness. Desde
            máquinas de ejercicio hasta accesorios y suplementos, tenemos todo
            lo que necesitas para crear un gimnasio en casa o equipar tu
            gimnasio comercial.
          </p>
          <p>
            Nos enorgullecemos de ofrecer productos de alta calidad que son
            duraderos, eficientes y asequibles. Todos nuestros productos son
            seleccionados cuidadosamente para asegurarnos de que cumplan con los
            más altos estándares de calidad.
          </p>
          <p>
            Además, nuestro equipo de atención al cliente está siempre a tu
            disposición para ayudarte en todo lo que necesites. Nuestros
            expertos están disponibles para responder cualquier pregunta que
            tengas sobre nuestros productos y para ayudarte a encontrar la mejor
            solución para tus necesidades.
          </p>
          <p>
            Sabemos que comprar equipo de gimnasio puede ser una inversión
            importante, pero también sabemos que es una inversión en tu salud y
            bienestar. Es por eso que ofrecemos opciones de financiamiento
            flexibles y envío gratuito para que puedas obtener el equipo que
            necesitas sin tener que preocuparte por los costos adicionales.
          </p>
          <p>
            No esperes más para alcanzar tus metas de fitness. Compra en nuestra
            tienda en línea hoy y descubre por qué somos la mejor opción para
            tus necesidades de entrenamiento. ¡Confía en nuestros productos y no
            te arrepentirás!
          </p>
        </AboutUsText>
      </AboutUsContainer>
      <div className="contenedor">
        <div className="contenedor1">
          <div className="card1">
            <div className="conteiner2">
              <img src={agus} alt="img"></img>
            </div>
            <div className="info">
              <p>Agustin Vacca</p>
              <Link to="https://www.instagram.com/kunaguero/">
                <ImgGrande src={insta} />
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter} />
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch} />
              </Link>
              <p>No rompan los huevos ni el codigo</p>
            </div>
          </div>
          <div className="card1">
            <div className="conteiner2">
              <img src={santi} alt="img"></img>
            </div>
            <div className="info">
              <p>Santi Aguero</p>
              <Link to="https://www.instagram.com/kunaguero/">
                <ImgGrande src={insta} />
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter} />
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch} />
              </Link>
              <p>Un tipazo</p>
            </div>
          </div>
          <div className="card1">
            <div className="conteiner2">
              <img src={fred} alt="img"></img>
            </div>
            <div className="info">
              <p>Alfredo Egremy</p>
              <Link to="https://www.instagram.com/kunaguero/">
                <ImgGrande src={insta} />
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter} />
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch} />
              </Link>
              <p>Besto PM y ta mamadisimo</p>
            </div>
          </div>
          <div className="card1">
            <div className="conteiner2">
              <img src={moa} alt="img"></img>
            </div>
            <div className="info">
              <p>Mateo Ossorio Arana</p>
              <Link to="https://www.instagram.com/kunaguero/">
                <ImgGrande src={insta} />
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter} />
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch} />
              </Link>
              <p>
                No es lo mismo tomar una clase en linea, que tomarse una linea
                en clase
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="conteiner2">
              <img src={javier} alt="img"></img>
            </div>
            <div className="info">
              <p>Javier</p>
              <Link to="https://www.instagram.com/kunaguero/">
                <ImgGrande src={insta} />
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter} />
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch} />
              </Link>
              <p>Hola tarolas</p>
            </div>
          </div>
          <div className="card1">
            <div className="conteiner2">
              <img src={brian} alt="img"></img>
            </div>
            <div className="info">
              <p>Brian</p>
              <Link to="https://www.instagram.com/kunaguero/">
                <ImgGrande src={insta} />
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter} />
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch} />
              </Link>
              <p>Ñom ñom ñom</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
