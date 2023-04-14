import styled from "styled-components";


export const FiltersStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 20px;
margin: 1rem;

select{
    background: transparent;
     border: none;
     font-size: 14px;
     height: 30px;
     padding: 5px;
     width: 250px;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 6px -1px;
     border-radius: 8px;
}

.ordenAlf{
    display: grid;
    grid-template-columns: 1.5rem auto;
    justify-content: center;
    gap: 0.5em;
}



`;