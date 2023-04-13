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

