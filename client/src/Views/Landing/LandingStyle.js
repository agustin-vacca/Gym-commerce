import styled from "styled-components";

export const LandingDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: white;

  .Logo {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 7%;
    display: flex;
    justify-content: space-between;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(56, 50, 50, 1) 35%,
      rgba(0, 0, 0, 1) 95%
    );
    box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .logoImg {
    border-radius: 10px;
  }

  .h1 {
    display: flex;
    color: aliceblue;
    justify-content: center;
    align-items: center;
  }
  .button1 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: forestgreen;
    width: 200px;
    color: white;
    font-size: medium;
    cursor: pointer;
    border-radius: 10px;
    border: none;
  }
  .arrow {
    margin: 20px;
  }

  .slider {
    position: absolute;
    top: 0;
    flex-direction: column;
    width: 100%;
    height: 89%;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
    background: white;
  }

  .slider img {
    flex: 0 0 100%;
    height: 100%;
    width: 98%;
    object-fit: cover;
    scroll-snap-align: center;
    box-shadow: rgba(0, 0, 0, 0.9) 0px 19px 38px,
      rgba(0, 0, 0, 0.9) 0px 15px 12px;
  }
  map area,
  .button {
    cursor: pointer;
  }

  .h1CARDIGAN {
    font-size: 150px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: olivedrab;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .button {
    margin-top: 3%;
    width: 150px;
    padding: 0.5%;
    background: olivedrab;
    color: white;
    font-size: larger;
  }
  .divs {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: -500px;
    left: 50px;
    width: fit-content;
    color: aliceblue;
    padding: 2%;
    border: 1px solid blueviolet;
  }
`;

/*
 *imagen con forma de Pesas
 */
/* 

.img1 {
    justify-content: center;
    align-content: center;
    width: 400px;
    height: 400px;
    object-fit: cover;
    margin-top: 50px;
    clip-path: polygon(
      76% 55%,
      70% 55%,
      70% 90%,
      46% 90%,
      46% 55%,
      40% 55%,
      40% 80%,
      15% 80%,
      15% 55%,
      0 55%,
      0 45%,
      15% 45%,
      15% 20%,
      40% 20%,
      40% 45%,
      46% 45%,
      46% 10%,
      70% 10%,
      70% 45%,
      76% 45%,
      76% 0,
      100% 0,
      100% 100%,
      76% 100%
    );
  }


  .img2 {
    width: 400px;
    height: 400px;
    object-fit: cover;
    margin-top: 50px;
    clip-path: polygon(
      84% 80%,
      60% 80%,
      60% 55%,
      54% 55%,
      54% 90%,
      30% 90%,
      30% 55%,
      24% 55%,
      24% 100%,
      0 100%,
      0 0,
      24% 0,
      24% 45%,
      30% 45%,
      30% 10%,
      54% 10%,
      54% 45%,
      60% 45%,
      60% 20%,
      84% 20%,
      84% 45%,
      100% 45%,
      100% 55%,
      84% 55%
    );
  }
 */

/* 
export const LandingDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: white;
  }

  .card .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 50%;
    overflow: hidden;
    transition: 0.5s;
    background: white;
  }

  .map_img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .entrada {
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
    box-shadow: 0 5px 10px white;
  }

  .card .back {
    transform: perspective(600px) rotateY(180deg);
    box-shadow: 0 5px 10px white;
  }

  .card:hover .front {
    transform: perspective(600px) rotateY(180deg);
  }

  .card:hover .back {
    transform: perspective(600px) rotateY(360deg);
  }
`;


*/
