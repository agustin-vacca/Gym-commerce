import styled from "styled-components";

export const Popstyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 500ms;

  .popup {
    background-color: white;
    padding: 20px;
    border: 1px solid black;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    max-width: 300px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
    align-content: space-between;
  }

  /* Estilo del botón para abrir el popup */

  .btn-open {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-close {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
/* 
.ReactModal__Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .ReactModal__Content {
    background-color: white;
    padding: 20px;
    border: 1px solid black;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    max-width: 500px;
    width: 100%;
  }
  
*/
