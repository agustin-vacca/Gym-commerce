import React from "react";
import { Container } from "./DetailcardStyle";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../redux/actions";


function Detailcard({ rating, opinion,id }) {
  const dispatch = useDispatch()

  function closeReview(event) {
    event.preventDefault()
    dispatch(deleteReview(id))
    window.location.reload();
}

  return (
    <Container>
      <div className="firtRow"><p className="rating">{rating}/5</p></div>
      <div className="secondRow"><p>{opinion}</p></div>
      <button className="delButton" onClick={closeReview}>X</button>
      
    </Container>
  );
}
export default Detailcard;