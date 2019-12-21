import React from "react";
import Bredcrum from "../bredcrum";
import ProductGallery from "../productGallery";
import TechnicalProductInfo from "../technicalProductInfo";
import ContactInfo from "../contactInfo";
import ProductDescription from "../productDescription";
import Features from "../features";
import "./__style.scss";

const cardList = ({ itemDataList, show, _handleClick }) => {
  const {
    attributes,
    contact,
    features,
    htmlDescription,
    images,
    price,
    title
  } = itemDataList;

  const staticContent = {
    vDescription: "Vehicle Description",
    tecnicalSpec: "Technical specifications",
    features: "Product Features",
    contactInfoTxt: "Contact Information"
  };

  const getImages = images.map(prefix_URL => {
    let thumbnail = `https://${prefix_URL.uri}_2.jpg`;
    let original = `https://${prefix_URL.uri}_57.jpg`;

    return { thumbnail, original };
  });
  return (
    <>
      <div className="left-section">
        <ProductGallery items={getImages} />
      </div>
      <div className="right-section">
        <Bredcrum title={title} />
        <ProductDescription
          title={title}
          price={price}
          vDescription={staticContent.vDescription}
          description={htmlDescription}
        />
        <TechnicalProductInfo
          tecnicalSpec={staticContent.tecnicalSpec}
          show={show}
          attributes={attributes}
          _handleClick={_handleClick}
        />
        <Features featuresTxt={staticContent.features} features={features} />
        <ContactInfo
          contactInfoTxt={staticContent.contactInfoTxt}
          contact={contact}
        />
      </div>
    </>
  );
};

export default cardList;
