import React, { useState } from 'react'
import '../Styles/Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [navActive , setNavActive] = useState(1);
  return (
    <>
      <section className="header-comp">
        <div className="common-container">

          <div className="header-flex-bx">

            <div className="header-left-box header-left-box2">

            <div className="left-header-logo">
              <img src="/images/nav-logo.svg" alt="" />
            </div>

            <div className="center-header-search-bx">
            <ion-icon name="search-outline"></ion-icon>
              <input type="text" className='search' name='search' id='search' placeholder='Search...' autoComplete='off' />
            </div>
            </div>

            <div className="right-header-cart-wish-acnt-flex-bx">

              <button className="swtch-page-btn">
              <ion-icon name="person-outline"></ion-icon>
              <div className="num-bx">1</div>
              </button>

              <button className="swtch-page-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <div className="num-bx">2</div>

              </button>

              <button className="swtch-page-btn">
              <ion-icon name="cart-outline"></ion-icon>
              <div className="num-bx">0</div>

              </button>
              
            </div>
            
          </div>
          
        </div>
      </section>

      <header className="header-comp2">
        <div className="common-container">

          <div className="header-flex-bx header-flex-bx2">

            <div className="header-left-box">

            <div className="left-categ-filt-bx">
              <button className="categ-filt-btn">
              <i class="fa-solid fa-table-cells-large"></i>
              Browse Categories
              </button>
            </div>

            <div className="center-navabr">
              <div className="navbar">
                <nav className="nav">
                  <div className="nav-lists">
                    <li className={navActive == 1 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('1')}> <NavLink to="#" className="nav-links">Home</NavLink> </li>
                    <li className={navActive == 2 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('2')}> <NavLink to="#" className="nav-links">About</NavLink> </li>
                    <li className={navActive == 3 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('3')}> <NavLink to="#" className="nav-links">Shop</NavLink> </li>
                    <li className={navActive == 4 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('4')}> <NavLink to="#" className="nav-links">Blog</NavLink> </li>
                    <li className={navActive == 5 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('5')}> <NavLink to="#" className="nav-links">Gallery</NavLink> </li>
                    <li className={navActive == 6 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('6')}> <NavLink to="#" className="nav-links">My Account</NavLink> </li>
                    <li className={navActive == 7 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('7')}> <NavLink to="#" className="nav-links">Contact</NavLink> </li>

                  </div>
                </nav>
              </div>
            </div>
            </div>

            <div className="help-num-bx">
            <ion-icon name="headset-outline"></ion-icon>
            <p>Hotline <span> 1900 - 888 </span></p>
            </div>
            
          </div>
          
        </div>
      </header>
      
    </>
  )
}

export default Header
