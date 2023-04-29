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
