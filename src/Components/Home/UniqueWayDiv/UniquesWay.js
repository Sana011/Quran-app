import React from "react";
import quranImg from "../../../images/uniqway.png";
import phoneImg from "../../../images/MobileFrame.png";
import "../../../Components/Home/UniqueWayDiv/unique.css";
function UniquesWay() {
  return (
    <div>
      <div className="container">
        <div className="row m-0 p-0 colums">
        <div className="col-md-6 col-lg-6 col-sm-12 left-div">
          <h2>A Unique and Engaging Way to Memorize the Quran</h2>
   <p className="unqway-para">Recite and leave the rest to Tarteel's groundbreaking A.I technology. <br />
Be notified of mistakes in your recitation in real-time.<br/>
Strengthen and build on your existing Quran memorization.<br/>
Make the Quran a part of your daily routine.</p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 right-div">
            <div className="position">
            <img src={quranImg} alt="" srcset="" className="quranImg" />
            <div className="overlay"></div>
            <img src={phoneImg} alt="" srcset="" className="PhoneImg" />
            </div>
           
        </div>
        </div>
      </div>
    </div>
  );
}

export default UniquesWay;
