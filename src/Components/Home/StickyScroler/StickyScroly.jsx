import React from 'react'
import "../../../Components/Home/StickyScroler/sticky.css";
function StickyScroly() {
  return (
    <div>
      <div className="container scrolspy">
        <div className="row">
          <div className="col-md-6 sticky-row">
          <h1 className='sticky-Heading'>Discovered by 1.5M+ Muslims and counting!</h1>
          <p className='sticky-para'>Tarteel connects Muslims with the Quran</p>
          </div>
          <div className="col-md-6 scroll-row">
        <div className="scroller">
          <div className="trustedNum">
            <p className='num'>999</p><p className='trusted-heading'>Average app stores rating</p>
            </div>
            <p className='trusted-para'>With over 1,500 ratings on both the Google Play Store and the Apple App Store</p>
            <div className="trustedNum">
            <p className='num'>999</p><p className='trusted-heading'>Average app stores rating</p>
            
            </div>
            <p className='trusted-para'>With over 1,500 ratings on both the Google Play Store and the Apple App Store</p>
            <div className="trustedNum">
            <p className='num'>999</p><p className='trusted-heading'>Average app stores rating</p>
            
            </div>
            <p className='trusted-para'>With over 1,500 ratings on both the Google Play Store and the Apple App Store</p>
        </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default StickyScroly

