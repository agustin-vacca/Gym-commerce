import styled from "styled-components";
import NavBarAdmin from "../../componentes/NavBarAdmin/NavBarAdmin";
import React, { useEffect, useState } from "react";
import "./Switch.css";
import { useDispatch, useSelector } from "react-redux";
import ReviewsCard from "../../componentes/Admin/ReviewsCard/ReviewsCard";
import { getReviews } from "../../redux/actions";

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

export default function AdminReviews(){

    const dispatch = useDispatch();
    const reviews = useSelector( state => state.reviews )

    const [change, setChange] = useState(false)

    useEffect( () => {
        dispatch(getReviews());
        // eslint-disable-next-line
    },[change])

    return(
        <>
            <NavBarAdmin/>  
            <Container>
                <Recuadros>
                    {/* <p>User:</p> */}
                    <p>ID:</p>
                    <p>Opinion:</p>
                    <p>Rating:</p>
                    <p>Estado:</p>
                </Recuadros>

                {reviews.map( e => {
                        return(
                            <ReviewsCard 
                            id={e.id}
                            //user={e.user}
                            opinion={e.opinion}
                            rating={e.rating}
                            setChange = {setChange} 
                            />
                        );
                    })} 
                
            </Container>         
        </>
    )
}