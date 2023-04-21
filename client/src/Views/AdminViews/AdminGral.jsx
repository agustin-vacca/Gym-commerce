import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBarAdmin from "../../componentes/NavBarAdmin/NavBarAdmin";

const Container = styled.div`
  background: #808080;
  border-radius: 15px;
  max-height: 600px;
  min-height: 600px;
  overflow-y: auto;
  margin-left: 10%;
  margin-right:10%;
`
export default function(){
    return(
        <>
            <NavBarAdmin/>  
            <Container>
            </Container>          
        </>
    )
}