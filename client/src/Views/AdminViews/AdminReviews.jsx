import React from "react";
import styled from "styled-components";
import NavBarAdmin from "../../componentes/NavBarAdmin/NavBarAdmin";
import borrar from "./trash3.svg"
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
`    
const ImgGrande = styled.img`
    width:3%;
    background: #9f9f9f;
    padding: 2px;
    border-radius: 5px;
`

export default function AdminReviews(){
    return(
        <>
            <NavBarAdmin/>  
            <Container>
                <Recuadros>
                    <p>User:</p>
                    <p>Opinion:</p>
                    <p>Rating:</p>
                    <p>Estado:</p>
                </Recuadros>
                <Productos>   
                    <PStyledProduct>Lorem</PStyledProduct>
                    <PStyledProduct>Lorem</PStyledProduct>             
                    <PStyledProduct>Lorem</PStyledProduct>
                    <ImgGrande src={borrar}/>
                </Productos>
            </Container>         
        </>
    )
}