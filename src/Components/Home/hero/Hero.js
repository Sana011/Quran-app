import React from "react";
import centerImg from "../../../images/White.svg";
import appstore from "../../../images/appstore.svg";
import playstore from "../../../images/googleplay.svg";
import leftherobg from "../../../images/hero-left-Img.png";
import rightherobg from "../../../images/hero-right-img.png";
function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-bg">
      <div className="background-img-left">
        <img src={leftherobg} alt="" srcset="" />
      </div>
      <div className="background-img-right">
      <img src={rightherobg} alt="" srcset="" />
      </div>
      </div>
     
      <div className="icon-holder m-auto">
        <img src={centerImg} alt="Logo" className="app-icon" />
      </div>
      <div className="hero-content">
        <h1 className="main-heading">
          Your A.I - Powered
          <br /> Quran Companion
        </h1>
        <p className=" hero-para">
          Tarteel advances your Quran memorization by interacting with you as
          you recite
        </p>
      </div>
      <div className="dowload-app mx-3">
        <img src={appstore} className="download-icon" alt="" srcset="" />
        <img src={playstore} alt=""  className="download-icon" srcset="" />
      </div>
    </div>
  );
}

export default Hero;
