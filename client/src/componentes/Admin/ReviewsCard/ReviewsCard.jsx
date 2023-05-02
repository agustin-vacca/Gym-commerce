import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteReview } from "../../../redux/actions";
import borrar from "./trash3.svg";

const Productos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-bottom: 1px dashed #999;
  align-items: center;
`;

const PStyledProductId = styled.p`
  width: 20%;
  color: black;
  margin-left: 1px;
  margin-right: 1px;
`;

const PStyledProduct = styled.p`
  width: 100%;
  color: black;
  margin-left: 1px;
  margin-right: 1px;
`;
const PStyledProductAdmin = styled.p`
  width: 50%;
  margin-left: 1px;
  margin-right: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgGrande = styled.div`
  cursor: pointer;
`;

function ReviewsCard({ id, opinion, rating }) {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteReview(id));
  };

  return (
    <Productos>
      <PStyledProductId key={id}>{id}</PStyledProductId>
      {/* <PStyledProduct>{user}</PStyledProduct> */}
      <PStyledProduct key="opinion">{opinion}</PStyledProduct>
      <PStyledProduct key="rating">{rating}</PStyledProduct>
      <PStyledProductAdmin>
        <ImgGrande>
          <FiTrash2 size={20} onClick={() => deleteHandler(id)} src={borrar} />
        </ImgGrande>
      </PStyledProductAdmin>
    </Productos>
  );
}

export default ReviewsCard;
