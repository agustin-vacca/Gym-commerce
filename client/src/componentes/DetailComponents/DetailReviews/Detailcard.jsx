import React from "react";
import { Container } from "./DetailcardStyle";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function Detailcard({ rating, opinion }) {


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

    </Container>
  );
}
export default Detailcard;
