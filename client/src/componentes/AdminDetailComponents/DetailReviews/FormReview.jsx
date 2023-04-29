import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../../redux/actions";
import { Container } from "./FormReviewStyle";

const FormReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [number, setNumbers] = useState(0);

  useEffect(() => {
    setInput({
      ...input,
      rating: number,
      user: "",
      item: id,
    });
  }, [number]);

  const [input, setInput] = useState({
    opinion: "",
    rating: "",
    user: "",
    item: id,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setInput({
      ...input,
      rating: number,
      user: "",
      item: id,
    });
    e.preventDefault();
    console.log(input);
    dispatch(createReview(input));
    setInput({
      opinion: "",
      rating: "",
      user: "",
      item: "",
    });
    window.location.reload();
  };

  return (
    <div>
      <Container>
        <div className="title"></div>
        <div className="califica">
          <label>Califica este producto</label>
          <br></br>
          {Array(5)
            .fill()
            .map((_, index) =>
              number >= index + 1 ? (
                <AiFillStar
                  key={index + 1}
                  style={{ color: "orange" }}
                  onClick={(e) => setNumbers(index + 1)}
                />
              ) : (
                <AiOutlineStar
                  key={index + 1}
                  style={{ color: "orange" }}
                  onClick={(e) => setNumbers(index + 1)}
                />
              )
            )}
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
          {number !== 0 && input.opinion !== "" ? (
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
