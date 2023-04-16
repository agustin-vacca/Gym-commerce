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