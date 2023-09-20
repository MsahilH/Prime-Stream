import React from 'react'
import './home.scss'
import MainBanner from './mainBanner/MainBanner'
import ProductionHouse from '../../components/productionhouse/ProductionHouse'

const Home = () => {
  return (
    <>
    <div className ='homePage'>
      <MainBanner />
      <ProductionHouse />
    </div>
    </>
  )
}

export default Home