import styled from "styled-components";



export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: fit-content;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 1em;
  padding-bottom: 2em;
  padding: 1%;
  position: relative;


  .textarea{
    width: 80%;
    height: 50px;
    resize:none;
    position: relative;


  background-color: #dddddd;
  color: #666666;
  padding: 1em;
  border-radius: 10px;
  border: 2px solid transparent;
  outline: none;
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  transition: all 0.2s;

:hover {
  cursor: pointer;
  background-color: #eeeeee;
}

:focus {
  cursor: text;
  color: #333333;
  background-color: white;
  border-color: #333333;
}

}
.stars{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  cursor: pointer;

  i{
    color: #e6e6e6
  }
  .active{
    color:#ff9c1a
  }
}

.estrellas{
  background-color: #333333;
}

`;
