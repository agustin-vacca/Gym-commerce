import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Container } from "./DetailcardStyle";

function Detailcard({ rating, opinion, id }) {
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
      <button className="delButton">X</button>
    </Container>
  );
}
export default Detailcard;
