import React, { useContext, useState } from "react";
import featureProd from "../JsonData/FeatureProd";
import ProdItem from "./ProdItem";
import ProductDetPopup from "./ProductDetPopup";
import { ShopContext } from "../Context";

const FeatureProdComp = ({ filter }) => {
  const [featProd, setFeatProd] = useState(featureProd);
  const {AllProdData} = useContext(ShopContext);
  const [selectedProduct , setSelectedProduct] = useState(null) ;

          
  const handleViewClick = (productId) => {

    // console.log(productId);

    const selectedValue =  AllProdData.find((elem,id) => elem.id === productId);
    setSelectedProduct(selectedValue);
}

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
              id={curElem.id}
              frontImg={curElem.prodFront}
              backImg={curElem.prodBack}
              prodName={curElem.prodName}
              prodTitle={curElem.miniText}
              price={curElem.price}
              rating={curElem.rating}
              tagname={curElem.tag}
              percent={curElem.percent}
              tagType={curElem.tagtype}
              onClickOpen={() => handleViewClick(curElem.id)}
            />
          );
        })}
      </div>

      {selectedProduct  && <ProductDetPopup productData={selectedProduct}  onClose={() => setSelectedProduct(null)} />  }

    </>
  );
};

export default FeatureProdComp;
