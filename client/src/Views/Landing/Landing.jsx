import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import box from "../../box.png";
import logoImage from "../../cardiganRectangulo.png";
import { LandingDiv } from "./LandingStyle.js";

function Landing() {
  const navigate = useNavigate();

  // const myFunction = (e) => {
  //   const landName = e.target.className;
  //   if (landName) {
  //     window.localStorage.setItem("landingName", JSON.stringify(landName));
  //     navigate("/catalogue");
  //   }
  // };

  const onClickButton = () => {
    return navigate("/home");
  };
  return (
    <LandingDiv>
      <div className="slider">
        <img src={box} alt="box" />
      </div>
      <div className="Logo">
        <img src={logoImage} alt="logoImg" className="logoImg" />
        <h1 className="h1">Bienvenido!</h1>
        <button className="button1" onClick={onClickButton}>
          Ir a la Tienda!
          <FiArrowRight className="arrow" />
        </button>
      </div>
    </LandingDiv>
  );
}
export default Landing;

/* 
<div className="card">
        <div className="face front">
          <img className="map_img" src={imagen} alt="Logo Cardigan" />
        </div>
        
        <div className="face back">
          <div className="letters">
            <h3 className="entrar" onClick={myFunction}>
              ENTRAR
            </h3>
          </div>
        </div>
</div>

-------------------------------------------
    
    <LandingDiv>
      <div className="background">
        <img
          className="map_img"
          src={imagen}
          alt="Logo Cardigan"
          useMap="#workmap"
        />
        <map name="workmap" className="workmap">
          <area
            shape="circle"
            coords="170,150,160"
            alt="logo"
            onClick={myFunction}
          ></area>
        </map>
      </div>
    </LandingDiv>
    */
