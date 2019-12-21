import React from "react";
import "./__style.scss";

const contactInfo = ({ contactInfoTxt, contact }) => (
  <div className="product-info contact">
    <h3>{contactInfoTxt}</h3>
    <div>
      <div className="cname">{contact.name}</div>
      <div className="address">
        <p>{contact.address1}</p>
        <p>{contact.address2}</p>
      </div>
      <div className="tel">Tel .:{contact.phones[0].number}</div>
      <a href="mailto:cluehr@ebay.com?Subject=enquiry%20for%car">
        <button className="email-btn">Send Email</button>
      </a>
    </div>
  </div>
);
export default contactInfo;
