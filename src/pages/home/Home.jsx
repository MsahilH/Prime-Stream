import React from 'react'
import './home.scss'
import MainBanner from './mainBanner/MainBanner'
import ProductionHouse from '../../components/productionhouse/ProductionHouse'
import Trending from './trending/Trending'
const Home = () => {
  return (
    <>
    <div className ='homePage'>
      <MainBanner />
      <ProductionHouse />
      <Trending />
    </div>
    </>
  )
}

export default Home