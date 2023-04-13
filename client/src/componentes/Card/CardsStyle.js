import styled from "styled-components";

export const CardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 24rem;
  width: 17rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  font-family: "Plus Jakarta Sans";
  transition: 1s;

p, img{
  border: 1px solid black;
  max-width: 20rem;
  max-height: 12rem;
  object-fit: cover;
}

  :hover{
    scale: 103%;
  }
`;

export const TextPrice = styled.div`
  border: 1px solid black;
`;
