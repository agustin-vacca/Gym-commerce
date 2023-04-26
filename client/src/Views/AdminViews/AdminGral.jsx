import React from "react";
import styled from "styled-components";
import NavBarAdmin from "../../componentes/NavBarAdmin/NavBarAdmin";
import ImagenFill from "./image-fill.svg"
const Container = styled.div`
  background: #808080;
  border-radius: 15px;
  max-height: 600px;
  min-height: 600px;
  overflow-y: auto;
  margin-left: 10%;
  margin-right:10%;
`
const ImgFill = styled.img`
    width:50%;
`
export default function AdminGral(){
    return(
        <>
            <NavBarAdmin/>  
            <Container>
                <ImgFill src={ImagenFill} alt="demo"></ImgFill>
            </Container>          
        </>
    )
}