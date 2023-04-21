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
      console.log(productReviews);
    }

    useEffect(() => {
      dispatch ( filterReviewsByProduct(id));
      console.log(productReviews);
      }, []);

return ( 
    <Container>
      <details>
            <summary onClick={verReviews}>Ver Opiniones sobre este Producto</summary>
            {productReviews.map((el) => {
            return (
              <Detailcard
                key={el.id}
                usuario={el.usuarios[0].full_name}
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