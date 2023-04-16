import styled from "styled-components";

export const LandingDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .card {
    position: relative;
    width: 250px;
    height: 250px;
  }

  .card .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 50%;
    overflow: hidden;
    transition: 0.5s;
  }

  .map_img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .entrar:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #333;
    text-decoration-style: solid;
  }

  .letters {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card .front {
    transform: perspective(600px) rotateY(0deg);
    box-shadow: 0 5px 10px black;
  }

  .card .back {
    transform: perspective(600px) rotateY(180deg);
    box-shadow: 0 5px 10px black;
  }

  .card:hover .front {
    transform: perspective(600px) rotateY(180deg);
  }

  .card:hover .back {
    transform: perspective(600px) rotateY(360deg);
  }
`;

export const MapImg = styled.img`
    border-radius: 100%;
    :hover {
  background-color: antiquewhite;
}
`;