import styled from "styled-components";

export const CardsDisplayer = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    row-gap: 4rem;
    column-gap: 9rem;
    font-size: larger;
    margin: 3rem 6rem;
    transition: 1s;
`;