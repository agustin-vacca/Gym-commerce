import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: black;
  

  .divOne {
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
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
    cursor:pointer;
  }
  .navButton:hover {
    color: rgb(255, 238, 0);
  }
  .link {
    text-decoration: none;
  }
.searchBarDiv{
  width: 375px;
  height: auto;
}

`;
