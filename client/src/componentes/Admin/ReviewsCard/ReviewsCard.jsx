import React from "react";
import styled from "styled-components";
import borrar from "./trash3.svg";
import { deleteReview } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const Productos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20%;
  border-bottom: 1px dashed black;
  margin-right: 3%;
  margin-left: 3%;
  align-items: baseline;
`;
const PStyledProduct = styled.p`
  width: 5%;
`;
const ImgGrande = styled.img`
  width: 3%;
  background: #9f9f9f;
  padding: 2px;
  border-radius: 5px;
  cursor: pointer;
`;

function ReviewsCard({id, opinion, rating}) {

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteReview(id));
  };


  return (
    <Productos>
      <PStyledProduct>{id}</PStyledProduct>
      {/* <PStyledProduct>{user}</PStyledProduct> */}
      <PStyledProduct>{opinion}</PStyledProduct>
      <PStyledProduct>{rating}</PStyledProduct>
      <ImgGrande onClick={() => deleteHandler(id)} src={borrar} />
    </Productos>
  );
}

export default ReviewsCard;
