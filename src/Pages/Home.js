import React from 'react'

import Hero from "../Components/Home/hero/Hero";
import "../Components/Home/hero/hero.css";
import FeaturesBrand from "../Components/Home/Features/FeaturesBrand";

import UniquesWay from "../Components/Home/UniqueWayDiv/UniquesWay";

import TrteelFeatures from "../Components/Home/FeatureParts-2/TrteelFeatures";

import Guide from "../Components/Home/Quran-Guid-section/Guide";

import StickyScroly from "../Components/Home/StickyScroler/StickyScroly";

import Goals from "../Components/Home/Goals Container/Goals";

import Carosel from "../Components/Home/carosul/Carosel";

import Footer from "../Components/footer/Footer";



function Home() {
  return (
    <div>
    

      <div >
        <Hero />
      </div>
      <div>
        <FeaturesBrand/>
      </div>
      <div>
        <UniquesWay/>
      </div>
      <div>
        <TrteelFeatures/>
      </div>
      <div>
        <Guide/>
      </div>
      <div>
       <StickyScroly/>
      </div>
      <div>
        <Goals/>
        </div>
      <div>
        <Carosel/>
        </div>
        <div>
        <Footer/>
        </div>
       
    </div>
  )
}

export default Home
