import React from 'react'
import HomeSlider from '../Components/HomeSlider'
import Feature from '../Components/Feature'
import ProdFilterComp from '../Components/ProdFilterComp'
import ServBanner from '../Components/ServBanner'
import ProdCateg from '../Components/ProdCateg'
import BannerComp from '../Components/BannerComp'
import NewArrivl from '../Components/NewArrivl'
import MonthlySell from '../Components/MonthlySell'
import Blog from '../Components/Blog'

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Feature />
      <ProdFilterComp />
      <ServBanner />
      <ProdCateg />
      <BannerComp />
      <NewArrivl />
      <MonthlySell />
      <Blog />
    </>
  )
}

export default Home
