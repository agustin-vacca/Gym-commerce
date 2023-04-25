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

  .btn-close {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-right: 2%;
    cursor: pointer;
  }

  .CarritoHeader {
    background-color: #000;
    color: #fff;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    font-size: larger;
  }

  .CarritoItem {
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #333;
    padding: 30px;
  }

  .ItemImg {
    margin-right: 20px;
    width: 15%;
  }

  .CarritoDetail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
  }

  .ItemName {
    display: block;
    font-weight: bold;
    margin-bottom: 30px;
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
    border: 1px solid red;
    border: none;
    font-size: 18px;
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
    font-weight: bold;
    font-size: 20px;
  }

  .btnEliminar {
    position: absolute;
    right: 15px;
    top: 15px;
    color: #000;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #000;
    cursor: pointer;
    display: block;
    background: transparent z-index 20;
  }

  .carritoTotal {
    background-color: #f3f3f3;
    padding: 30px;
  }

  .fila {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .btnPagar {
    display: block;
    width: 100%;
    border: none;
    background: #000;
    color: #fff;
    border-radius: 5px;
    font-size: 18px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 0.03;
  }
`;

export const CarritoItemDetalle = styled.div``;

export const CarritoHeader = styled.div``;
