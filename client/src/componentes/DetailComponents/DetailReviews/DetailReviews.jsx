import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterReviewsByProduct } from "../../../redux/actions";
import Detailcard from "./Detailcard";
import { Container } from "./DetailReviewsStyle";
import FormReview from "./FormReview";


export default function DetailReviews() {
    const {id} = useParams()
    const dispatch = useDispatch();
    const productReviews = useSelector((state) => state.reviews);
    const [orden, setOrden] = useState("");

    const verReviews = async () => {
      dispatch ( filterReviewsByProduct(id));
    }
    console.log(orden)

    useEffect(() => {
      dispatch ( filterReviewsByProduct(id));
      // eslint-disable-next-line
      }, []);

return ( 
    <Container>
      <details>
            <summary onClick={verReviews}>Ver Opiniones sobre este Producto</summary>
            {productReviews.map((el) => {
            return (
              <Detailcard
                key={el.id}
                id={el.id}
                usuario={el.user}
                rating={el.rating}
                opinion={el.opinion}
              />
            
            );
          })}

          <FormReview setOrden={setOrden} />
          </details>
           
        </Container>
)
}