import React from "react";


function Detailcard({ usuario, rating, opinion }) {
  return (
    <div>
      <p>{usuario}</p>
      <p>{rating}</p>
      <p>{opinion}</p>
    </div>
  );
}
export default Detailcard;