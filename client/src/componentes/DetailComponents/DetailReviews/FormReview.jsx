import React, { useState } from "react";
import { Container} from "./FormReviewStyle";
import {  useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createReview } from "../../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";

const FormReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useAuth0();

  const [input, setInput] = useState({
    opinion: "",
    rating: "",
    user: "",
    item: id,
  });
  const ver = (e) => {
    const santi = user.name;
    console.log(santi);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setInput({
      ...input,
      user: "",
      item: id,
    });
    e.preventDefault();
    dispatch(createReview(input));
    setInput({
      opinion: "",
      rating: "",
      user: "",
      item: "",
    });
    window.location.reload();
  };

  const stars = document.querySelectorAll(".stars i")

  
  function clicked1(event) {
   stars.forEach((star, index1)=>{
    star.addEventListener("click", ()=>{
      setInput({
        ...input,
        rating: index1 + 1
      })
       stars.forEach((star,index2) =>{
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
      }) 
    })
  }) 
}

  return (
    <div>
      <Container>
        <div className="title">
        </div>
        <div className="califica">
          <label>Califica este producto</label>

<div className="stars">
  <i className="fa-solid fa-star "  onClick={clicked1}></i>
  <i className="fa-solid fa-star "  onClick={clicked1}></i>
  <i className="fa-solid fa-star "  onClick={clicked1}></i>
  <i className="fa-solid fa-star "  onClick={clicked1}></i>
  <i className="fa-solid fa-star "  onClick={clicked1}></i>
</div>

        </div>
        <div>
          <textarea
            className="textarea"
            id="inputname"
            type="text"
            value={input.opinion}
            name="opinion"
            onChange={(e) => handleChange(e)}
            title="opinion"
          />
        </div>
        <div className="divSubmitButton">
          {input.rating !== "" && input.opinion !== "" ? (
            <button
              id="submitButton"
              onClick={(e) => handleSubmit(e)}
              type="submit"
            >
              ENVIAR
            </button>
          ) : (
            <button
              id="submitButton"
              disabled
              onClick={(e) => handleSubmit(e)}
              type="submit"
            >
              ENVIAR
            </button>
          )}
        </div>
      </Container>

    </div>
  );
};
export default FormReview;
