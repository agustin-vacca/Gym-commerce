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
export default function NavBarAdmin(){
    return(
        <NavBarAdminDiv>
            <ul class="nav nav-tabs">
                <StyledLinks>
                    <StyledA href="/admin">Vista General</StyledA>               
                    <StyledA href="/admin/productos">Productos</StyledA>                
                    <StyledA href="/admin/usuarios">Usuarios</StyledA>               
                    <StyledA href="/home">Volver al inicio</StyledA>
                </StyledLinks>                                 
            </ul>
        </NavBarAdminDiv>
    )
}
