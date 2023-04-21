import React from "react";
import { Container } from "./DetailcardStyle";


function Detailcard({ usuario, rating, opinion }) {
  return (
    <Container>
      <div className="firtRow"><p>{usuario}</p><p>{rating}/5</p></div>
      <div className="secondRow"><p>{opinion}</p></div>
      
    </Container>
  );
}
export default Detailcard;