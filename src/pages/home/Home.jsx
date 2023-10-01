import React from 'react'
import './home.scss'
import MainBanner from './mainBanner/MainBanner'
import ProductionHouse from '../../components/productionhouse/ProductionHouse'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
const Home = () => {
  return (
    <>
    <div className ='homePage'>
      <MainBanner />
      <ProductionHouse />
      <Trending />
      <Popular />
      <TopRated />
    </div>
    </>
  )
}

export default Home