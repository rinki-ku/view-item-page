import React from "react";
import "./__style.scss";

const productDescription = ({ title, price, vDescription, description }) => (
  <>
    <h1>{title}</h1>
    <div className="price-details">
      <span className="net-price">{price.net}</span>
      <span className="gross-price">{price.gross}</span>
      <span className="vat">{price.vat}% off</span>
    </div>

    <div className="product-info">
      <h3>{vDescription}</h3>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </>
);
export default productDescription;
