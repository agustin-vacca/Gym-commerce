import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: fit-content;
  margin: 0 auto;
  gap: 1em;
  padding-bottom: 2em;
  padding: 1%;

  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  .firtRow{
    display: flex;
  flex-direction: row;
  column-gap: 2rem;  
  width: fit-content;
  
  padding: 5px;


}

.secondRow{
    display: flex;
  flex-direction: row;
  margin-right: 5rem;


  padding: 5px;

  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
}

`;