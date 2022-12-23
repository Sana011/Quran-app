import React from 'react'
import "../../Components/GiftCards/GiftCards.css";

function GiftCards(props) {
  return (
            <div class="cards">
              <div className="card">
                <div className="cr-img">
                <img src={props.img} alt="" width="300px" height="300px" className='credit-card-img' />
                </div>
                    <h4>{props.heading}</h4>
                    <p className='cards-des'>Give the gift of a 3 months premium subscription to Tarteel.</p>
                   <div className="butns-div">
                   <button class="gift-btn">Buy Gifts
                   <p className='usd-amount'>USD $ 00.04</p>
                   </button>
                   
                    </div>
                    
              </div>
              
         
      </div> 
  )
}

export default GiftCards
