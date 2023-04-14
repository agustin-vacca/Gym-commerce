import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .BarDiv {
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .ThisIsLog {
    display: block;
    color: aliceblue;
    transition: 1s;
    cursor: pointer;
  }

  .ThisIsLog:hover {
    color: rgb(255, 238, 0);
  }

  .divTwo {
    margin-top: 0;
    display: flex;
    justify-content: space-evenly;
    background-color: black;
  }

  .navButton {
    display: grid;
    place-content: center;
    color: white;
    height: 3rem;
    width: 40%;
    transition: 1s;
    padding: 0;
  }
  .navButton:hover {
    color: rgb(255, 238, 0);
  }
  .link {
    text-decoration: none;
  }
`;
