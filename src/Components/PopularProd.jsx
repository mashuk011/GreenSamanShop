import React, { useState } from "react";
import PopularProdData from "../JsonData/PopularProd";
import ProdItem from "./ProdItem";

const PopularProd = ({ filter }) => {
  const [featProd, setFeatProd] = useState(PopularProdData);

  return (
    <>
      <div
        className={
          filter === "popular"
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

export default PopularProd;
