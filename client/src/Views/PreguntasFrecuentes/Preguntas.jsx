import React from "react";
import NavBar from "../../componentes/NavBar/NavBar";
import Footer from "../../componentes/Footer/Footer";
import "./Preguntas.css";

export default function Preguntas() {
  return (
    <div>
      <NavBar />
      <div class="layout">
      <div class="box">
        <p class="heading">Preguntas Frecuentes</p>
        <div class="faqs">
          <details>
            <summary>¿Hay costo de envío?</summary>
            <p class="text">
              El costo de envío se calcula dependiendo del producto que agregues
              y en compras superiores a $4,000 tu envío es gratis.
            </p>
          </details>
          <details>
            <summary>
              ¿Cúanto tiempo tarda en llegar el pedido a mi casa?
            </summary>
            <p class="text">
              Contamos con entrega inmediata es decir al momento de tu compra
              enviaremos tu pedido al día siguiente hábil y dependiendo del
              lugar de entrega tardará de 2 a 3 días. Una vez realizada tu
              compra y que se haya enviado tu pedido, recibirás un correo de
              confirmación con tu número de guía para ver el estatus de tu orden
              y fecha estimada de entrega.
            </p>
          </details>
          <details>
            <summary>¿Hay envíos a toda la república?</summary>
            <p class="text">
              Enviamos a la mayoría de los estados de la Republica.
            </p>
          </details>
          <details>
            <summary>¿Realizan instalación?</summary>
            <p class="text">
              No contamos con servicio de instalación. Se proporciona una guia
              de aramado para que puedas hacerlo.
            </p>
          </details>
          <details>
            <summary>¿De qué material están hechos nuestros productos?</summary>
            <p class="text">
              Nuestros racks están fabricados con acero de alta resistencia, con
              postes de 3x3” cal. 14.
            </p>
          </details>
        </div>
      </div>
      </div>
      <div class="footerDiv">
      <Footer />
      </div>
    </div>
  );
}
