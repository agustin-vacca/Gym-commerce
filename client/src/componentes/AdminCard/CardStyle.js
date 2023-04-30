import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 20rem;
  width: 15rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Plus Jakarta Sans";
  font-weight: 800;
  transition: 1s;
  :hover {
    scale: 103%;
  }
  a:link {
    text-decoration: none !important;
  }

  .TextPrice {
    font-size: small;
  }

  .TextName {
    font-size: large;
    font-family: "Plus Jakarta Sans";
  }

  .ProductImage {
    width: 13rem;
    height: 10rem;
  }

  .LinkText {
    color: black;
    font-size: small;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.5) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 20px;
    font-weight: bold;
    transition: 1s;
    :hover {
      box-shadow: rgba(54, 138, 73) 0px 7px 5px -1px,
        rgba(95, 73, 171, 0.7) 12px 12px 12px -1px;
    }
  }

  .deleteBtn,
  .addBtn {
    border: none;
    width: 90%;
    padding: 2%;
    background: none;
    border-bottom: 1px solid #333;
    letter-spacing: 2px;
    border-radius: 5px;
    cursor: pointer;
  }

  .deleteBtn:hover {
    background: rgb(255, 254, 254);
    background: linear-gradient(
      265deg,
      rgba(255, 254, 254, 1) 0%,
      rgba(255, 0, 22, 1) 49%,
      rgba(255, 255, 255, 1) 100%
    );
    transition: 1s;
  }

  .addBtn:hover {
    background: rgb(255, 254, 254);
    background: linear-gradient(
      265deg,
      rgba(255, 254, 254, 1) 0%,
      rgba(35, 255, 0, 1) 49%,
      rgba(255, 255, 255, 1) 100%
    );
    transition: 1s;
  }
  .restaurar {
    width: 9rem;
    height: 8rem;
    filter: grayscale(100%);
  }
`;
/*
 */
