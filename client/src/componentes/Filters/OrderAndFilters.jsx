import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByName, orderByPrice } from "../../redux/actions.js";
import { FiltersStyled } from "./Order&FilterStyled.js";

export default function OrderAndFilters({ setOrden }) {
  const dispatch = useDispatch();
  const [number, setNumber] = useState("1")


  function handleOrderByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
    setNumber(number=>e.target.value)
  }
  function handleOrderByPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
    setNumber(number=>e.target.value)
  }

  let numberCheck = number


  return (
    <FiltersStyled>

<button  
className= {`${numberCheck=== String(1) ? "special" : ""}`}
name="Order" id="1" onClick={(e) => handleOrderByName(e)} value="1" >A-Z</button>
<button  
className= {`${numberCheck=== String(2) ? "special" : ""}`}
name="Order" id="2" onClick={(e) => handleOrderByName(e)} value="2" >Z-A</button>
<button 
className= {`${numberCheck=== String(3) ? "special" : ""}`}
name="Order" id="3" onClick={(e) => handleOrderByPrice(e)} value="3" >Precio: mayor a menor</button>
<button  
className= {`${numberCheck=== String(4) ? "special" : ""}`}
name="Order" id="4" onClick={(e) => handleOrderByPrice(e)} value="4" >Precio: menor a mayor</button>

    </FiltersStyled>
  );
}
