import React from "react";
import MobileFrameImg from "../../../images/MobileFrame.png";
import voiceIconImg from "../../../images/MicPhoneImg.png";
import AytalKursiImg from "../../../images/ayatal-kursi.png";
import eyeOffImg from "../../../images/eye-off.svg";
import Vibration from "../../../images/Vibration.png";
import Language from "../../../images/lang.svg";
import "../../../Components/Home/Quran-Guid-section/guide.css";
function Guide() {
  return (
    <div className="container-fluid guide mt-5 mb-5">
      <div className="container continer-guide">
        <h1 className="guide-heading">
          Let your voice guide your Quran memorization journey
        </h1>
        <p className="guidepara">
          Interact with the Quran the way you naturally do with your voice.
        </p>
        <div className="row images-row">
          <div className="col-lg-6 col-md-12 guide-row-1 mt-5">
            <div className="testing">
            <h4>Voice Search</h4>
            <p>
              Recite any verse in Arabic, and Tarteel will magically locate the
              verse for you.
            </p>
            <div className="Images-position Images-position1">
               <img src={voiceIconImg} alt="" srcset="" className="voiceIconImg" /> 
              <img src={MobileFrameImg} alt="" srcset="" className="PhoneImg1" />
            </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-5">
            <div className="testing d-flex flex-column justify-content-end">
            <div className="Images-position Images-position2">
              <img src={AytalKursiImg} alt="" srcset="" className="aytal-kursi" /> 
              <img src={MobileFrameImg} alt="" srcset="" className="PhoneImg2" />
            </div>
            <h4 className="bottom-heading">Follow Along</h4>
              <p>
                Tarteel will highlight the words you're reciting as you say them
                to assist you in reviewing or reading
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards div */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12 my-5">
            <div className="icon1">
              <img src={eyeOffImg} style={{ width: "70px" }} alt="" srcset="" />
              <h3>Memorization Mode</h3>
              <p>
                Test your memorization by hiding the words that you haven't
                recited yet
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 my-5">
            <div className="icon1">
              <img src={Vibration} style={{ width: "70px" }} alt="" srcset="" />
              <h3>Memorization Mode</h3>
              <p>
                Test your memorization by hiding the words that you haven't
                recited yet
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 my-5">
            <div className="icon1">
              <img src={Language} style={{ width: "60px" }} alt="" srcset="" />
              <h3>Memorization Mode</h3>
              <p>
                Test your memorization by hiding the words that you haven't
                recited yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
