import styled from "styled-components";

export const Sidebar = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;

  .Logo {
    display: flex;
    justify-content: flex-start;
    height: 50px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(56, 50, 50, 1) 50%,
      rgba(255, 255, 255, 1) 95%
    );
  }

  .logoImg {
    height: 100%;
    width: 100%;
    justify-content: flex-start;
  }

  .Contenido {
    height: 100%;
    width: 100%;
    display: flex;
  }

  .DivLabelEmergente {
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1%;
  }
  .linklabel {
    text-decoration: none;
  }

  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4%;
    margin-bottom: 1%;
    margin-left: 1%;
    margin-right: 1%;
    border: 1px solid #999;
    color: black;
    text-decoration: none;
  }

  .labelComponente {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4%;
    margin-bottom: 1%;
    margin-left: 1%;
    margin-right: 1%;
    border: 1px solid #999;
    color: mediumturquoise;
    text-decoration: none;
  }

  .divShow {
    width: fit-content;
    height: fit-content;
    position: relative;
    top: 0%;
    left: 0%;
    border: none;
    background-color: transparent;
    margin-bottom: 20px;
  }

  .divhide {
    width: fit-content;
    height: fit-content;
    position: relative;
    top: 0%;
    right: 0%;
    border: none;
    background-color: transparent;
    margin-bottom: 20px;
    border: 2px solid black;
  }

  .divSalida:hover,
  .divEntrada:hover {
    cursor: pointer;
  }

  .contenidoDash {
    height: 100%;
    width: 100%;
    padding: 1%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

//border: 2px solid red;

export const LandingDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
  width: 100vw;

  .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: white;
  }

  .card .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 50%;
    overflow: hidden;
    transition: 0.5s;
    background: white;
  }

  .map_img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .entrada {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    color: white;
  }

  .entrada:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #333;
    text-decoration-style: solid;
  }

  .letters {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
  }

  .card .front {
    transform: perspective(600px) rotateY(0deg);
    box-shadow: 0 5px 10px black;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card .back {
    transform: perspective(600px) rotateY(180deg);
    box-shadow: 0 5px 10px whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card:hover .front {
    transform: perspective(600px) rotateY(180deg);
  }

  .card:hover .back {
    transform: perspective(600px) rotateY(360deg);
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
  }

  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .linklabel {
    text-decoration: none;
  }
`;
