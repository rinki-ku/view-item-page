import React from "react";
import "./__style.scss";

const bredcrum = ({ title }) => (
  <div className="bredcrum">
    <ul>
      <li>Home ></li>
      <li>Cars ></li>
      <li>{title}</li>
    </ul>
  </div>
);
export default bredcrum;
