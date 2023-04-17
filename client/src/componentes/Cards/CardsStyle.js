import styled from "styled-components";

export const CardsDisplayer = styled.div`
    display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    row-gap: 5rem;
    column-gap: 9rem;
    font-size: larger;
    margin: 3rem 0rem 0rem 0rem;
    transition: 1s;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

export const Container = styled.section`
  width: 100%;
  height: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
  overflow-x: hidden; 
  `
;


export const LoadingIMG = styled.h4`
  .lds-ring {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 44px;
  height: 44px;
  margin: 8px;
  border: 8px solid #ccc;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #ccc transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


 `;