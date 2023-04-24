import React from "react";
import { useNavigate } from "react-router-dom";
import imagen from "../../cardigan.png";
import { LandingDiv } from "./LandingStyle.js";

function Landing() {
  const navigate = useNavigate();
  const myFunction = () => {
    navigate("/home");
  };
  return (
    <LandingDiv>
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
    </LandingDiv>
  );
}
export default Landing;

/*  
    
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
