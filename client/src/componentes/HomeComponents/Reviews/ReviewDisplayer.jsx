import React, { useEffect } from "react";
import { getReviews } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ReviewCard from "./ReviewCard.jsx";
import {Container} from "./ReviewDisplayerStyle";


export default function ReviewDisplayer() {
    const dispatch = useDispatch();
    const allReviews = useSelector((state) => state.reviews);
  
    useEffect(() => {
      dispatch(getReviews());
    }, []);
  
    
    return (
      <Container>
         {allReviews.map((el) => {
              return (
                <ReviewCard
                  key={el.id}
                  rating={el.rating}
                  opinion={el.opinion}
                  producto={el.productos[0].name}
                  image={el.productos[0].image}
                  prodId={el.productos[0].id}
                />
              );
            })} 
  
      </Container>
    );
  };