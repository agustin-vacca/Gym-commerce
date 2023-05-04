import styled from "styled-components";

export const Head = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Headimg = styled.div`
  width: 100%;
  height: 400px;
  margin: 1%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
`;

export const Title = styled.div`
  width: 100%;
  height: 400px;
  margin: 1%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  .contenido {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .inputProp {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
  }
  .inputPropDescripcion {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
  }

  .Props {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
    margin-left: 3%;
  }

  .valorInput {
    text-align: center;
    width: 50%;
    //border: 1px solid blue;
  }
  .valorInputDescripcion {
    margin-top: 2%;
    text-align: center;
    width: 50%;
    height: 100%;
    overflow: scroll;
    //    border: 1px solid red;
  }

  .Btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2%;
    width: 100%;
    height: 50%;
  }

  .button {
    background-color: #ff6600;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
`;

export const Description = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 1rem;
  margin: 2rem;
`;

export const Review = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 1rem;
  margin: 2rem;
`;

export const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .botonCompra,
  .seguirComprando,
  .botonCarrito {
    margin: 10px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: block;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #0078d0;
    width: 100%;
    background-image: linear-gradient(
      45deg,
      #1366d6 0%,
      #2f80ed 51%,
      #1366d6 100%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .botonCompra:hover,
  .botonCarrito:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  .botonCompra:active,
  .botonCarrito:active {
    transform: scale(0.95);
  }

  .compradoBtn {
    margin: 10px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: block;
    border: 0px;
    width: 100%;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #0078d0;
    background-image: linear-gradient(
      109.6deg,
      rgb(162, 2, 63) 11.2%,
      rgb(231, 62, 68) 53.6%,
      rgb(255, 129, 79) 91.1%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
`;
