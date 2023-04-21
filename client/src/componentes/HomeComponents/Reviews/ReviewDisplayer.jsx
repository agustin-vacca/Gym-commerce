import React, { useEffect } from "react";
import { getReviews } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ReviewCard from "./ReviewCard.jsx";
import {Container} from "./ReviewDisplayerStyle";


export default function ReviewDisplayer() {
    const dispatch = useDispatch();
    const allReviews = useSelector((state) => state.reviews);
    const sliceReviews = allReviews.slice(0,4)


    useEffect(() => {
      dispatch ( getReviews());
    }, []);
  
    
    return (
      <Container>
         {sliceReviews.map((el) => {
              return (
                <ReviewCard
                  key={el.id}
                  user={el.usuarios[0].full_name}
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