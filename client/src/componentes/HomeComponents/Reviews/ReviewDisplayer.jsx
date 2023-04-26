import React from "react";
import { useSelector } from "react-redux";
import ReviewCard from "./ReviewCard.jsx";
import { Container } from "./ReviewDisplayerStyle";

export default function ReviewDisplayer() {
  const allReviews = useSelector((state) => state.allReviews);
  const sliceReviews = allReviews.slice(-4);

  return (
    <Container>
      {sliceReviews.map((el) => {
        return (
          <ReviewCard
            key={el.id}
            user={el.user}
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
}
