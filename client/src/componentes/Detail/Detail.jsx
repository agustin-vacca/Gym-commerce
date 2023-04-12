import "./Detail.css";

const Detail = () => {
  return (
    <div>
      <div className="head">
        <div className="headimg">
          <img src="" alt="img" />
        </div>
        <div className="title">
          <h1>Nombre del producto </h1>
          <h3>precio</h3>
          <button>añadir al carrito </button>
          <button>disponible</button>
          <div>
            <img src="" alt="mercado pago" />
            <img src="" alt="paypal" />
          </div>
        </div>
      </div>
      <div className="description">
        <h3>descripcion</h3>
      </div>
      <div className="review">
        <h3>Reviews</h3>
      </div>
    </div>
  );
};

export default Detail;
