import styled from "styled-components";


export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Headimg = styled.div`
  width: 600px;
  height: 500px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: 1rem;
`;

export const Title = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 2rem;
  button{
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 4px 0 8px 0 ;
    font-size: larger;
    font-family: "Plus Jakarta Sans";
    cursor: pointer;
    border-radius: 5px;
    transition: 1s;
    :hover{
      background-color: rgba(187, 65, 71, 0.8);
    }
  }
`;

export const Description = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 1rem;
  margin: 2rem;
`;


export const Review = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 1rem;
  margin: 2rem;
`;

export const WalletContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

.botonCompra{
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
  background-image: linear-gradient(45deg, #1366d6 0%, #2f80ed  51%, #1366d6  100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.botonCompra:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.botonCompra:active {
  transform: scale(0.95);
}

`;


