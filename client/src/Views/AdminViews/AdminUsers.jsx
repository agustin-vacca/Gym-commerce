import React from "react";
import NavBarAdmin from "../../componentes/NavBarAdmin/NavBarAdmin";
import styled from "styled-components";
import "./Switch.css"

const Container = styled.div`
  background: #808080;
  border-radius: 15px;
  max-height: 600px;
  min-height: 600px;
  overflow-y: auto;
  margin-left: 10%;
  margin-right:10%;
`
const Recuadros = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:20%;
    border-bottom: 1px solid black;
    margin:3%;
    color:black;
`
const Productos =styled.div`
   display:flex;
   flex-direction:row;   
   justify-content:center;
   gap:20%;
   border-bottom: 1px dashed  black;
   margin-right:3%;
   margin-left:3%;
   align-items:baseline;
`
const PStyledProduct = styled.p`
    width: 5%;
    color:black;
`
export default function AdminUsers(){
    return(
        <>
            <NavBarAdmin/>
            <Container>
                <Recuadros>
                    <p>Id:</p>
                    <p>Nombre:</p>
                    <p>Mail:</p>
                    <p>Admin:</p>
                </Recuadros>
                <Productos>   
                    <PStyledProduct>Lorem</PStyledProduct>
                    <PStyledProduct>Lorem</PStyledProduct>             
                    <PStyledProduct>Lorem</PStyledProduct>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
                </Productos>
            </Container>
        </>
    )
}