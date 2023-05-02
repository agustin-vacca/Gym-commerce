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

  width: 80%;
  padding: 5px;
}

.delButton{
  margin-right: 10px;
  border-radius: 90px;

  cursor: pointer;
  border: none;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  color: rgba(0, 0, 0, 0.25);
}



.starsRating{
  display: flex;
  flex-direction: row;
  width: 10%;
  cursor: pointer;

  i{
    color: black;
  }
}

`;