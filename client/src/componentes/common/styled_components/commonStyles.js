import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  border: 2px solid black;
  width: 17rem;
  height: fit-content;
  border-radius: 10px;
  background-color:rgba(200, 200, 200, 0.2) ;
  font-weight: 500;
  cursor: pointer;
  transition: 1s;

  :hover{
    scale: 103%;
  }

`;


