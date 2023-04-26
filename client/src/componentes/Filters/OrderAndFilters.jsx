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

    <h2>ORDENAR</h2>
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

{/*       <select onChange={(e) => handleOrderByName(e)}>
        <option>Order by Name</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select> */}

{/*       <select onChange={(e) => handleOrderByPrice(e)}>
        <option>Order by Price</option>
        <option value="asc">Increase price</option>
        <option value="desc">Decrease price</option>
      </select> */}

      {/* <select onChange={e=> handleFilterCategories(e)}>

        <option value="All">All Categories</option>
        <option value="Mancuernas">Mancuernas</option>
        <option value="Maquinas">Maquinas</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Rack">Rack</option>
        <option value="Discos y Barras">Discos y Barras</option>

      </select> */}
    </FiltersStyled>
  );
}
