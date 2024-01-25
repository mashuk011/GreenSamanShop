import React, { useContext, useState } from 'react'
import '../Styles/ProductFilter.css'
import { NavLink } from 'react-router-dom'
import { FiGrid } from "react-icons/fi";
import { FaListUl } from "react-icons/fa6";
import { ShopContext } from '../Context';
const ProductFilterShop = () => {
    const {AllProdData} = useContext(ShopContext);
    const [products, setProducts] = useState(AllProdData);
    const pageSize = 9 ;
    const [currentPage , setCurrentPage] = useState(1);
    const [sort , setSort] = useState('');

    const handleSorted = (sortType) => {
        let sortedProducts =  [...AllProdData];

        if(sortType === 'lowtohigh'){
            sortedProducts.sort((a,b) => a.price - b.price);
        }else if(sortType === 'hightolow'){
                sortedProducts.sort((a,b) => b.price - a.price);
        }else if(sortType === 'atoz'){
            sortedProducts.sort((a,b) => a.name.localeCompare(b.name));
        }else if(sortType === 'ztoa'){
            sortedProducts.sort((a,b) => b.name.localeCompare(a.name));
        }

        setSort(sortType);
        setCurrentPage(1);
        setProducts(sortedProducts);
        
    }
    
  return (
    <>

<div className="breadcrum-bx">
        <div className="common-container breadcrum-flex">
          <NavLink to="/">Home</NavLink>
          <span>Shop</span>
          <span> Products </span>
        </div>
      </div>

    <section className="product-filter-comp">
        <div className="common-container">

        <div className="product-filt-grid grid">

            <div className="left-product-filter-section"></div>

            <div className="right-product-filter-section">

                <div className="top-showing-prod-filter-main-bx-flex">

                    <h6>We found <span>16</span>  items for you!</h6>

                    <div className="right-filter-btns-flex-bx">

                        <button className="layout-btn grid-btn">
                        <FiGrid className='g-icon' />
                        </button>
  
                        <button className="layout-btn grid-btn">
                        <FaListUl className='g-icon' />
                        </button>

                        <div className="filter-select-bx">
                            <select name="productFilter" id="productFilter" onChange={(e) => handleSorted(e.target.value)}>
                                <option value="default">Default</option>
                                <option value="lowtohigh">Low To High</option>
                                <option value="hightolow">High To Low</option>
                                <option value="atoz">Products A To Z</option>
                                <option value="ztoa">Products Z To A</option>

                            </select>
                        </div>
                        
                    </div>
                    
                    
                </div>

                <div className="all-product-grid grid grid-four-col">


                    
                </div>
                
            </div>
            
        </div>
            
        </div>
    </section>
      
    </>
  )
}

export default ProductFilterShop
