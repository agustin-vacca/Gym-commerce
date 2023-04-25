import React, { useEffect } from "react";
import { Container } from "./DetailcardStyle";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../redux/actions";

function Detailcard({ rating, opinion, id }) {
  const dispatch = useDispatch();
  

  function closeReview(event) {
    event.preventDefault();
    dispatch(deleteReview(id));
    window.location.reload();
  }

   useEffect(()=> {
    activeStars()
  },[]
  ) 


  const stars = document.querySelectorAll(".starsRating i")
  
  
  function activeStars() {
        stars.forEach((star,aux) =>{
          console.log(aux);
          aux >= 0 ? star.classList.add("active") : star.classList.remove("active")
       }) 
     }
 

  return (
    <Container>
      <div className="firtRow">
        {/*         <p className="rating">{rating}/5</p> */}
        <div className="starsRating">
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
          <i className="fa-solid fa-star "></i>
        </div>
      </div>
      <div className="secondRow">
        <p>{opinion}</p>
      </div>
      <button className="delButton" onClick={closeReview}>
        X
      </button>
    </Container>
  );
}
export default Detailcard;
