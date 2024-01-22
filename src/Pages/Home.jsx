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
import TopDeal from '../Components/TopDeal'
import Newsletter from '../Components/Newsletter'
import Impact from '../Components/Impact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Feature />
      <Impact />
      <ProdFilterComp />
      <ServBanner />
      <ProdCateg />
      <BannerComp />
      <NewArrivl />
      <MonthlySell />
      <Blog />
      <TopDeal />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
