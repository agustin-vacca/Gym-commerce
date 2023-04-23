import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: fit-content;
  margin: 10px auto;

  justify-content: flex-start;
  align-items: center;

  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);


  .firtRow{
  display: flex;
  width: fit-content;
  

  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  width: fit-content;
  height: fit-content;
}

.secondRow{
    display: flex;
  flex-direction: row;
  margin-right: 5rem;


  padding: 5px;

  
}

`;