import styled from "styled-components";

export const LandingDiv = styled.div`
  .background {
    height: 100vh;
    width: 100vw;
    background: black;
    display: inline-flex;
    align-content: center;
    justify-content: center;
  }

  .map_img {
    display: flex;
    border-radius: 50%;
    border: 2px solid #333;
    width: 250px;
    height: 250px;
  }

  .map_img:hover {
    display: flex;
    width: 10px;
    height: 10px;
    transform: rotate(90deg);
  }

  .workmap {
    cursor: pointer;
  }
`;

export const MapImg = styled.img`
    border-radius: 100%;
    :hover {
  background-color: antiquewhite;
}
`;