import React, { useState } from "react";
import TrendingProdData from "../JsonData/TrendingProd";
import ProdItem from "./ProdItem";

const TrendingProd = ({ filter }) => {
  const [featProd, setFeatProd] = useState(TrendingProdData);

  return (
    <>
      <div
        className={
          filter === "trending"
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

export default TrendingProd;
