import React, { useEffect } from "react";
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
    
    const verReviews = async () => {
      dispatch ( filterReviewsByProduct(id));
    }

    useEffect(() => {
      dispatch ( filterReviewsByProduct(id));
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

          <FormReview/>
          </details>
           
        </Container>
)
}