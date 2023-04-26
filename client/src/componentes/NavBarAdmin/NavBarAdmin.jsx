import React from "react";
import styled from "styled-components";

const NavBarAdminDiv = styled.div`
    display:flex;
    align-items:baseline;
    padding-top: 5%;
    padding-right:10%;
    padding-left:10%;
`
const StyledLinks = styled.div`
    display:flex;
    gap:20px;    
`
const StyledA = styled.a`
     text-decoration: none;
`
const StyledB = styled.a`
     text-decoration: none;
     background: #9f9f9f;
     padding-left: 8px;
     padding-right: 8px;
     padding-top: 3px;
     padding-bottom: 3px;
     border-radius:5px;
`

export default function NavBarAdmin(){
    return(
        <NavBarAdminDiv>
            <ul class="nav nav-tabs">
                <StyledLinks>
                    <StyledA href="/Admin">Vista General</StyledA>               
                    <StyledA href="/Admin/productos">Productos</StyledA>                
                    <StyledA href="/Admin/usuarios">Usuarios</StyledA>
                    <StyledA href="/Admin/reviews">Reviews</StyledA>             
                    <StyledB href="/home">Volver al inicio</StyledB>
                </StyledLinks>                                 
            </ul>
        </NavBarAdminDiv>
    )
}
