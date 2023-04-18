import React from "react";
import "./Preguntas.css";
import { Layout } from "../NavBar/NavbarStyle";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Preguntas(){
    return(
       <div>
         <NavBar />
        <div class="box">
   <p class="heading">Preguntas Frecuentes</p>
   <div class="faqs">
      <details>
         <summary>What is Lorem ipsum?</summary>
         <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </details>
      <details>
         <summary>What is Lorem ipsum?</summary>
         <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </details>
      <details>
         <summary>What is Lorem ipsum?</summary>
         <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </details>
   </div>
</div>
<Footer/>
</div>
    )
};