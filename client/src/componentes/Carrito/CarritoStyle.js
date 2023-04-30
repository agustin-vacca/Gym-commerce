import styled from "styled-components";

export const MyCarrito = styled.div`
  border: 1px solid #333;
  width: 100%;
  margin-top: 30px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: auto;
  position: sticky !important;
  top: 0;
  transition: 0.3s;

  .CarritoHeader {
    background-color: #000;
    color: #fff;
    padding: 10px 0;
    text-align: center;
  }

  .btn-close {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-right: 2%;
    cursor: pointer;
  }

  .CarritoItem {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    position: relative;
    border-bottom: 1px solid #333;
    padding: 20px 30px;
  }

  .ItemImg {
    width: 15%;
  }

  .CarritoDetail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  .ItemName {
    display: block;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: uppercase;
    font-size: larger;
  }

  .SelectorCantidad {
    width: 30%;
    display: flex;
    align-items: normal;
    justify-content: space-evenly;
  }
  .valorCantidad {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  .Itemquantity {
    border: none;
    font-size: 18px;
    font-weight: 800;
    background: transparent;
    display: inline-block;
    width: 30px;
    padding: 15px;
    text-align: center;
  }

  .btnAddLess {
    font-size: 18px;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #000;
    cursor: pointer;
  }

  .ItemPrecio {
    display: flex;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    justify-content: center;
  }

  .btnEliminar {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #000;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #000;
    cursor: pointer;
    display: block;
    padding: 2px;
    background: transparent z-index 20;
  }

  .carritoTotal {
    background-color: #f3f3f3;
    padding: 15px 30px;
  }
  
  .fila {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 22px;
    font-weight: bold;
  }

  .btnPagar {
    width: 10%;
    border: none;
    background: #000;
    color: #fff;
    border-radius: 5px;
    font-size: 18px;
    padding: 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: 0.03;
    margin-top: 1%;
  }
`;

export const BotonMas = styled.button`
  appearance: none;
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 900;
  line-height: normal;
  margin: 0;
  outline: none;
  padding: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 5%;
  height: 50%;
  will-change: transform;
  :disabled {
    pointer-events: none;
  }
  
  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  
  :active {
    box-shadow: none;
    transform: translateY(0);
  }

`;

export const BotonMenos = styled.button`
appearance: none;
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 900;
  line-height: normal;
  margin: 0;
  outline: none;
  padding: 0;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 5%;
  height: 50%;
  will-change: transform;
  :disabled {
    pointer-events: none;
  }
  
  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  
  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`;