import React from "react";
import "./Nosotros.css";
import { Layout } from "../../Views/Home/commonStyles";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import imagen from "../../cardiganRectangulo.png";
import styled from "styled-components";
import img from "./R.png";
import { Link } from "react-router-dom";
import insta from "./imagenes/instagram.svg"
import twitter from "./imagenes/twitter.svg"
import twitch from "./imagenes/twitch.svg"
import agus from "./imagenes/agus.png"
import santi from "./imagenes/santi.png"
import fred from "./imagenes/fred.png"
import moa from "./imagenes/moa.png"
import javier from "./imagenes/javier.png"
import brian from "./imagenes/brian.png"

const ImgGrande = styled.img`
  width:15%;
`
const AboutUsContainer = styled.div`
   border: 30px solid #f6f6f6;
    background: #c7c7c7;    
`
const NameAndLogo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:8%;
    padding: 2%;
`
const AboutUsText = styled.div`
    align-items:center;
    justify-content:center;
    padding: 1% 5% 1% 5%;   
    `
const ImgLogo = styled.img`
    border-radius:8px;
   
`
export default function Nosotros1(){
    return(
    <Layout>
      <NavBar />
    <AboutUsContainer>
        
        <NameAndLogo>
            <ImgLogo className="LogoAboutUs" src={imagen} alt="Logo Cardigan" />
            <h1>Sobre Nosotros</h1>
        </NameAndLogo>
        <AboutUsText>            
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est nisi, venenatis sit amet urna quis, consectetur sagittis orci. Quisque id pharetra arcu. Suspendisse ornare, massa ac vehicula ultrices, mi lacus auctor leo, eu varius nibh ligula vel massa. Suspendisse sagittis nisl vel diam varius finibus. Aenean turpis est, tempor nec elementum vel, porttitor ac neque. Cras imperdiet a neque sit amet vulputate. Fusce iaculis tellus ut leo sollicitudin, id ornare ipsum sagittis. Curabitur ac tempor urna. Mauris blandit est ac commodo venenatis. Nunc eu sem ut sem mollis rhoncus. Sed a ultricies neque. Curabitur vel sagittis nisi. Quisque ut eleifend ligula.</p>
        <p>
        Pellentesque eu porta leo, id maximus lacus. Morbi eleifend suscipit massa. Sed ut viverra augue. Mauris vel bibendum felis, eu dictum purus. In fermentum ac dolor sit amet ullamcorper. Donec eu libero in magna maximus pellentesque vitae sed arcu. Fusce commodo elit vel aliquet laoreet. Integer eleifend consectetur orci ut eleifend. Duis tincidunt laoreet condimentum. Etiam ut iaculis massa, a laoreet enim.</p>
        <p>
        Proin posuere tortor at sem egestas pulvinar. Proin ut pellentesque nisi. Vestibulum mollis sodales facilisis. Cras eu orci ultrices, mollis ligula quis, congue ipsum. Quisque feugiat aliquet porta. In mollis, sem vel euismod ultricies, ligula lectus rutrum lorem, sit amet aliquam eros felis et neque. Duis commodo nec nibh ac auctor. Phasellus et nisl nisl. Aliquam vitae risus vitae dolor fringilla fermentum nec ac diam. Integer bibendum ante vestibulum, ornare urna ut, elementum libero. Vivamus nec congue lorem, in gravida ante. Nullam lobortis sollicitudin leo, non porta turpis luctus id. Nam ornare dui non elementum scelerisque.</p>
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
                <ImgGrande src={insta}/>
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter}/>
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch}/>
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
                <ImgGrande src={insta}/>
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter}/>
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch}/>
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
                <ImgGrande src={insta}/>
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter}/>
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch}/>
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
                <ImgGrande src={insta}/>
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter}/>
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch}/>
              </Link>
              <p>No es lo mismo tomar una clase en linea, que tomarse una linea en clase</p>
            </div>
          </div> 
          <div className="card1">
            <div className="conteiner2">
              <img src={javier} alt="img"></img>
            </div>            
            <div className="info">
              <p>Javier</p>
              <Link to="https://www.instagram.com/kunaguero/">
                <ImgGrande src={insta}/>
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter}/>
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch}/>
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
                <ImgGrande src={insta}/>
              </Link>
              <Link to="https://twitter.com/aguerosergiokun">
                <ImgGrande src={twitter}/>
              </Link>
              <Link to="https://www.twitch.tv/slakun10">
                <ImgGrande src={twitch}/>
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
   
      