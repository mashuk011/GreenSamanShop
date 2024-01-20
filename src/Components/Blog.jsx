import React, { useState } from 'react'
import "../Styles/CategCss.css";
import "../Styles/ProdFilt.css";
import '../Styles/HomeSlide.css'
import '../Styles/BlogCSS.css'
import BlogDet from '../JsonData/BlogData';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    const [blogData , setBlogData] = useState(BlogDet);
    
  return (
    <>


    <section className="blog-comp">
        <div className="common-container">

       

            <div className="blog-grid grid grid-two-col">

                <div className="left-blog-grid-det-bx">

                <div className="categ-flex-bx comn-heading categ-flex-bx3">
            <h6>
              {" "}
              <span>From</span> Blog
            </h6>
            </div>

            <div className="blog-main-det-bx">

                {blogData.map((elem,id) => {
                    return (
                        <>

                        <div className="blog-box" key={id}>
                            <div className="blog-img">
                                <img src={elem.blogImg} alt="" />
                            </div>

                            <div className="blog-det-bx">
                                <p> {elem.blogtitle} </p>
                                <h5> {elem.blogText} </h5>

                                <div className="blog-date-view-flex-bx">
                                    <div className="date-view-bx">
                                    <span> {elem.date} </span>
                                    <span> {elem.views} </span>
                                    </div>

                                    <NavLink to="#">Read More</NavLink>
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                        </>
                    )
                })}
                
            </div>

                    
                </div>
                
            </div>
            
        </div>
    </section>
    
      
    </>
  )
}

export default Blog
