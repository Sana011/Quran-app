import React from "react";
import priceImg from "../../../images/wide-dots-panel.jpeg";
import "../../../Components/Pricing/Price/Price.css";
function PricingPakgs() {
  return (
    <div className="container-fluid bg-img">
      <div className="container pricing-cards-container py-5">
        <div className="row pricingpkg-row d-flex justify-content-center align-items-center mx-2 ">
          <div className="col-sm-12 col-lg-4 col-md-4 my-5">
            <h2 className="subscribe-heading">Subscribe to Tarteel Premium</h2>
            <p className="sub-para">
              Subscribe to Tarteel Premium Supercharge your Quran recitation and
              memorization journey with a suite of advanced features designed to
              maximize your success.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-4 price-cards-cols my-5">
            <div className="months-heading">
              <h6>1 Month</h6>
            </div>
            <div className="dollar-price">
              <h2>
                $9.99 <span className="per-month">/ Per Month</span>
              </h2>
            </div>
            <div className="billed-p">Billed Monthly</div>
<div className="trail-buttons"> <button className="trail-btn">Start Trial</button></div>
           
            <div className="free-trail">
              <p className="free-trail-p">7 Days Free Trial</p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-4 price-cards-cols-2 my-5">
            <div className="months-heading">
              <h3 className="monts">
                3 Month <span className="discount">Save 33%</span>
              </h3>
            </div>
            <div className="dollar-pric-1">
              <h1>
                $9.99 <span className="per-month">/ Per Month</span>
              </h1>
            </div>
            <div className="billed-p">
              Billed Annually at <span className="text-through">$89.99</span>{" "}
              $̶1100
            </div>
<div className="trail-buttons"> <button className="trail-btn-1">Start Trial</button></div>
           
            <div className="free-trail1">
              <p className="free-trail-p">7 Days Free Trial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPakgs;
