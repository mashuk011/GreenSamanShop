import React, { useEffect, useState } from "react";
import NewArrvlData from "../JsonData/NewArrvl";
import "../Styles/ProdFilt.css";
import "../Styles/CategCss.css";
import ProdItem from "./ProdItem";

const NewArrivl = () => {
  const [arrvlData, setArrvlData] = useState(NewArrvlData);

  useEffect(() => {
    const servSlider = document.querySelectorAll(".arrivl-slider");

    const sliderInit = function (currentSlider) {
      const prevslideBtn = currentSlider.querySelector(".prev");
      const nextslideBtn = currentSlider.querySelector(".next");
      const servSliderContainer = currentSlider.querySelector(
        ".arrivl-slider-container"
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
      <section className="new-arrvl-comp">
        <div className="common-container">
          <div className="categ-flex-bx">
            <h6>
              <span>New</span> Arrivals
            </h6>
          </div>

          <div className="categ-slider-main-bx">
            <div className="arrivl-slider">
              <div className="arrivl-slider-container">
                {arrvlData.map((curElem, index) => {
                  return (
                    <>
                      <div className="slider-items slider-items2">
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
                      </div>
                    </>
                  );
                })}
              </div>

              <div className="slider-btns-flex-bx">
                <button className="slide-btn prev slider-control ">
                  <i class="fa-solid fa-angle-left"></i>
                </button>

                <button className="slide-btn next slider-control ">
                  <i class="fa-solid fa-angle-right"></i>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default NewArrivl;
