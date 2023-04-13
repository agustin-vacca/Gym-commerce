import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .SearchBarDiv{
    background-color: black;
    display: flex;
    justify-content:space-around;
    align-items:center;
}



.ThisIsLog{
    color: aliceblue;
}

.divTwo {
    margin-top: 0;
    display: flex;
    align-items: flex-start;
}

.navButton{
    display: grid;
    place-content: center;
    background-color: black;
    color: white;
    height: 3rem;
    width: 40%;
    cursor: pointer;
    transition: 1s;
    padding: 0;
}
.navButton:hover{
    color: rgb(255, 238, 0);
}

`

export const ThisIsLog = styled.div`
    color: aliceblue;
`