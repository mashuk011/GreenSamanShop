import React, { useState } from "react";
import featureProd from "../JsonData/FeatureProd";
import ProdItem from "./ProdItem";

const FeatureProdComp = ({ filter }) => {
  const [featProd, setFeatProd] = useState(featureProd);

  return (
    <>
      <div
        className={
          filter === "featured"
            ? "prod-grid-bx prodgridactive grid grid-four-col grid-gap"
            : "prod-grid-bx grid grid-four-col grid-gap"
        }
      >
        {featProd.map((curElem, index) => {
          return (
            <ProdItem
              key={curElem.id}
              frontImg={curElem.prodFront}
              backImg={curElem.prodBack}
              prodName={curElem.prodName}
              prodTitle={curElem.miniText}
              price={curElem.price}
              rating={curElem.rating}
              tagname={curElem.tag}
              percent={curElem.percent}
              tagType={curElem.tagtype}
            />
          );
        })}
      </div>
    </>
  );
};

export default FeatureProdComp;
