import React, { useEffect, useState } from 'react'
import PopularProdData from "../JsonData/PopularProd";
import ProdItemTwo from "./ProdItemTwo";

const MonthlyPopular = () => {


    useEffect(() => {
      const servSlider = document.querySelectorAll(".populr-slider");
  
      const sliderInit = function (currentSlider) {
        const prevslideBtn = currentSlider.querySelector(".pop-slide-prev");
        const nextslideBtn = currentSlider.querySelector(".pop-slide-next");
        const servSliderContainer = currentSlider.querySelector(
          ".poplr-slider-cont"
        );
  
        const totalSliderVisibleItems = Number(
          getComputedStyle(currentSlider).getPropertyValue("--slider-items")
        );
        const totalSliderItems =
          servSliderContainer.childElementCount - totalSliderVisibleItems;
          let currentSliderPos = 0;
  
        const sliderservNext = function () {
  
          currentSliderPos++;
  
          servSliderContainer.style.transform = `translateX(-${servSliderContainer.children[currentSliderPos].offsetLeft}px)`;
            if (currentSliderPos >= totalSliderItems) {
              nextslideBtn.classList.add("hiddenBtn");
            }
            prevslideBtn.classList.remove("hiddenBtn");
     
        };
  
        nextslideBtn.addEventListener("click", sliderservNext);
  
        const sliderservPrev = function () {
  
          currentSliderPos--;
  
          servSliderContainer.style.transform = `translateX(-${servSliderContainer.children[currentSliderPos].offsetLeft}px)`;
          if (currentSliderPos <= 0) {
                prevslideBtn.classList.add("hiddenBtn");
              }
              nextslideBtn.classList.remove("hiddenBtn");
          
        
        };
  
        prevslideBtn.addEventListener("click", sliderservPrev);
      };
  
      for (let i = 0; i < servSlider.length; i++) {
        sliderInit(servSlider[i]);
      }
    }, []);
    
  return (
    <>
       <div className="categ-slider-main-bx right-monthly-sell-product-slider-main">
                <div className="arrivl-slider month-slider populr-slider">
                    <div className="arrivl-slider-container poplr-slider-cont month-slider-cont">

                {PopularProdData.map((curElem,index)=> {
                    return (
                        <>
                            <div className="slider-items slider-items2 slider-items3">
                        <ProdItemTwo key={curElem.id}
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
                          </div>
                        
                        </>
                    )
                })}

                </div>

                <button className="slide-btn prev pop-slide-prev slider-control month-slid-prev">
                  <i class="fa-solid fa-angle-left"></i>
                </button>

                <button className="slide-btn next pop-slide-next slider-control month-slide-next">
                  <i class="fa-solid fa-angle-right"></i>
                </button>
                
                </div>
            </div> 
    </>
  )
}

export default MonthlyPopular
