import React from "react";
import { Container } from "./DetailcardStyle";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../redux/actions";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function Detailcard({ rating, opinion, id }) {
  const dispatch = useDispatch();

  function closeReview(event) {
    event.preventDefault();
    dispatch(deleteReview(id));
    window.location.reload();
  }

  return (
    <Container>
      {Array(5)
        .fill()
        .map((_, index) =>
          rating >= index + 1 ? (
            <AiFillStar key={index + 1} style={{ color: "orange" }} />
          ) : (
            <AiOutlineStar key={index + 1} style={{ color: "gray" }} />
          )
        )}

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
