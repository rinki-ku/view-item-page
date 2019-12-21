import React from "react";
import "./__style.scss";

const technicalData = ({ tecnicalSpec, show, attributes, _handleClick }) => (
  <div className="product-info technical">
    <h3>{tecnicalSpec}</h3>
    <div className={show ? "show-more" : "show-less"}>
      <table>
        <tr>
          <th>Label</th>
          <th>Tag</th>
          <th>Value</th>
        </tr>
        {attributes &&
          attributes.map((attr, index) => {
            return (
              <tr key={index}>
                <td>{attr.label}</td>
                <td>{attr.tag}</td>
                <td>{attr.value}</td>
              </tr>
            );
          })}
      </table>
    </div>
    <button className="read-more" onClick={_handleClick}>
      {show ? "Read Less!" : "Read More!"}
    </button>
  </div>
);
export default technicalData;
