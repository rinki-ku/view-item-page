import React from "react";
import "./__style.scss";

const features = ({ featuresTxt, features }) => (
  <div className="product-info features">
    <h3>{featuresTxt}</h3>
    <ul>
      {features.map((featureList, index) => {
        return <li key={index}>{featureList}</li>;
      })}
    </ul>
  </div>
);
export default features;
