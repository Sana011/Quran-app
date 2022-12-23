import React from "react";
import Lastlogo from "../../../images/White.svg";
import appstore from "../../../images/appstore.svg";
import playstore from "../../../images/googleplay.svg";
import sliderone from "../../../images/sliderImg1.png";
import voicee from "../../../images/MicPhoneImg.png";
import ayatalkursi from "../../../images/ayatal-kursi.png";
import "../../../Components/Home/carosul/carosel.css";
function carosel() {
  return (
    <div>
      <div className="container-fluid journey-container px-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="logo-And-Des">
            <div className="icon-holde-end"><span className="des"> <img src={Lastlogo} alt="" className="footer-logo" srcset=""/></span>
          <h6 className="download"> Download now and start your experience</h6>
      </div> </div> 
                <h1 className="journey-h1">Start your Quran Journey Today</h1>
                <div className="dowload-app-1 my-3 mx-3">
        <img src={appstore} className="download-icon-1" alt="" srcset="" />
        <img src={playstore} alt=""  className="download-icon-1" srcset="" />
      </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
          <div id="carouselExampleSlidesOnly" alt="" srcset="" class="carousel slide handIphone"data-bs-ride="carousel">
                <div class="carousel-inner Inner">
                    <div class="carousel-item Item active">
                      <img src={sliderone} class="d-block w-100 h-100 rounded" alt="..."/>
                    </div>
                    <div class="carousel-item Item">
                      <img src={voicee} class="d-block w-100 h-100 rounded" alt="..."/>
                    </div>
                    <div class="carousel-item Item">
                      <img src={ayatalkursi} class="d-block w-100 h-100 rounded" alt="..."/>
                    </div>
                  </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default carosel;
