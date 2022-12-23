import React from "react";
import GiftCards from "../Components/GiftCards/GiftCards";
import "../Components/GiftCards/GiftCards.css";
import creditcard from "../images/creditcard.png";
import Footer from "../Components/footer/Footer";
import "../Components/footer/footer.css";
function Gift() {
  return (
    <div>
      <div className="container giftConatiner">
        <h1 className="giftHeading">Give the Gift of Tarteel</h1>
        <p className="gifts-para">
          Help your family and friends be more engaged with the Quran
        </p>
        <div className="cards">
          <GiftCards heading="Month 1" img={creditcard} />
          <GiftCards heading="Month 2" img={creditcard} />
          <GiftCards heading="Month 3" img={creditcard} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Gift;
