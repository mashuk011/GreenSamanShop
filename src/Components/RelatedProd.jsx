import React, { useState } from 'react'
import ProdItem from './ProdItem';

const RelatedProd = ({relatedProdData}) => {
    
  return (
    <>

    <div className="related-prod-main-bx">

        <h6 className='rel-prod-text'>Related Products</h6>

    <div className="related-prod-grid grid grid-four-col grid-gap">

    {relatedProdData.relatedProd.map((curElem, index) => {
        return (
            <>

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
            />
            
            </>
        )
    })}
        
    </div>
    </div>
    </>
  )
}

export default RelatedProd
