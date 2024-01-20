import React from 'react'
import Star from './Star'

const ProdItem = (props) => {
  return (
    <>

    <div className="prod-item-bx" >
        <div className="prod-img-bx">
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

            <div className="prod-three-btn-flex">

                <div className="prod-btn-bx">
                    <span>Quick View</span>
                    <button className="prod-quick-btn">
                    <ion-icon name="eye-outline"></ion-icon>
                    </button>
                </div>

                
                <div className="prod-btn-bx prod-btn-bx2">
                    <span>Add To Wishlist</span>
                    <button className="prod-quick-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                    </button>
                </div>

                
                <div className="prod-btn-bx prod-btn-bx3">
                    <span>Add To Cart</span>
                    <button className="prod-quick-btn">
                    <ion-icon name="bag-outline"></ion-icon>
                    </button>
                </div>
                
            </div>
            
            
        </div>

        <div className="prod-info-bx">

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

export default ProdItem
