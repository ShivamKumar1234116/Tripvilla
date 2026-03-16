import React from 'react'
import Navbar from '../components/LAYOUT/Navbar'
import Footer from '../components/LAYOUT/Footer'
import HeroSection from '../components/LAYOUT/hero'

import Aboutus from '../components/LAYOUT/Aboutus'
import Feedback from '../components/LAYOUT/Feedback'
import PackageList from './Packages/PackageList'




// ✅ Components inside slider folder
import TrendingDestinations from '../components/Ui/TrendingDestinations'
// import FeaturedProgram from "./Slider/FeaturedProgram"


import FilterDes from '../components/TRAVELS/FilterDes'
import Hotel from './Hotel'
import Restaurants from './Restaurants'
import Travel from './Travel'
import PackagesHome from './Packages/PackagesHome'







const Home = () => {
  return (
    <div>

      <HeroSection />

<PackageList />


<PackagesHome />


      <Hotel />








      {/* <FeaturedProgram /> */}
      {/* <TrendingDestinations /> */}


      <Restaurants />


      <Travel />



      <Aboutus />
      <Feedback />


    </div>
  )
}

export default Home
