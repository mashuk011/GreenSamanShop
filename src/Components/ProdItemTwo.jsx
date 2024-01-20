import React from 'react'
import Star from './Star'
const ProdItemTwo = (props) => {
  return (
    <>
         <div className="prod-item-bx prod-item-bx2" >
        <div className="prod-img-bx prod-img-bx2">
            <div className="prod-img prod-img-1">
                <img src={props.frontImg} alt="" />
            </div>
            <div className="prod-img prod-img-2">
                <img src={props.backImg} alt="" />
            </div>

           { props.tagType === true ? 
             <div className={ props.tagname == "New" ? " newtag " : props.tagname == "Sale" ? "saletag" : "hottag" }>
                <span> {props.tagname} </span>
            </div> : null}

            <div className="prod-three-btn-flex prod-three-btn-flex2">

                <div className="prod-btn-bx prod-btn-bx4 prod-btn-bx-text1">
                    <span>Quick View</span>
                    <button className="prod-quick-btn prod-quick-btn2">
                    <ion-icon name="eye-outline"></ion-icon>
                    </button>
                </div>

                
                <div className="prod-btn-bx prod-btn-bx4 prod-btn-bx2 prod-btn-bx-text2">
                    <span>Add To Wishlist</span>
                    <button className="prod-quick-btn prod-quick-btn2">
                    <ion-icon name="heart-outline"></ion-icon>
                    </button>
                </div>

                
                <div className="prod-btn-bx prod-btn-bx4 prod-btn-bx3 prod-btn-bx-text3">
                    <span>Add To Cart</span>
                    <button className="prod-quick-btn prod-quick-btn2">
                    <ion-icon name="bag-outline"></ion-icon>
                    </button>
                </div>
                
            </div>
            
            
        </div>

        <div className="prod-info-bx prod-info-bx2">

            <span> {props.prodTitle} </span>

            <h3> {props.prodName} </h3>

            <div className="rat-percent-flex">

                <Star star={props.rating} />

                <h6> {props.percent} </h6>
                
            </div>

            <h5> ₹{props.price} </h5>
            
        </div>
        
    </div>
    </>
  )
}

export default ProdItemTwo
