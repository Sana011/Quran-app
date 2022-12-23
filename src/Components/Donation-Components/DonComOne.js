import React, {useState} from 'react'
import "../../Components/Donation-Components/DonComOne.css"
import menpraying from"../../images/meenpraying.png"
import girl from"../../images/girl.png"
import girlsgroup from"../../images/girlsGroup.png"
import boysgroup from"../../images/boysGroup.png"
import angleDown from"../../images/angle-down-solid.svg"
import angleup from"../../images/angle-up-solid.svg"
function DonComOne() {
    const [angle, setAngel] = useState(false);
    const  chngIcon = () =>{
        setAngel(!angle)
            }
  return (
    <div className='body'>
      <div class="container don-first-con  pt-5">
        <div class="Donation-row pt-5">
          <div class="col1">
            <img
              src={menpraying}
              alt=""
              srcset=""
              width="290px"
              height="450px"
              class="menImg"
            />
          </div>
          <div class="col1">
            <img
              src={girl}
              alt=""
              srcset=""
              width="290px"
              height="550px"
              class="girl"
            />
          </div>
          <div class="col1">
            <h1 class="text-gradient-1">Tarteel Alim Program</h1>
            <p class="donation-p">
              The Alim program offers serious individuals who can't afford to
              pay for Tarteel a free Premium subscription. The subscription
              includes Mistake Detection, Memorization Tools, and more.
            </p>
            <div class="donation-btn">
              <button class="donat-btn">Donate</button>
              <button class="apply-btn">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div className="row students mt-5 mb-5">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={girlsgroup} alt="" width="550px" className="girls-img" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src={boysgroup}
              alt=""
              srcset=""
              className="boys-img"
              height={300}
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div className="don-long-paragph">
          <h1 className="hh">Donate to the Alim Program</h1>
          <p className="don-log-para">
            Start a Sadaqah Jariyah (perpetual charity) by supporting Tarteel's
            mission and sponsoring someone in financial need to memorize the
            Quran with the best resources available Your donation goes to .
            <br />
            <br />
            ‍ Your donation goes to sponsor an individual that meets the
            requirements for the Alim program. All the funds are held in a
            separate treasury specific to the program. The applications are
            reviewed and approved on an ongoing basis. <br />
            <br />
            Your donation also helps grow Tarteel, enabling us to invest in new
            features and improving our artificial intelligence technology to
            offer higher accuracy and faster speeds for all users.
          </p>
        </div>
      </div>

{/* Form for donation */}
<div className="container-fluid donatio-form">
        <div className="form-donation-fields">
          <form className='donation-form'>
           <h5 className='form-heading'>Donation Information</h5>
           <div className="pkges-btn">
           <button className='monthly-btn'>Monthly</button>
           <button className='one-time-btn'>One Time</button>
           </div>
         <div className="fields">
         <input type="number" class="form-control monthly-amount" id="inputEmail4" placeholder="Enter Monthly Amount "/>
           <div className="row for-col">
            <div className="col-3">
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>   
            </div>
            <div className="col-3">
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>   
            </div>
            <div className="col-3">
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>   
            </div>
            <div className="col-3">
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>   
            </div>

           </div>
           <input type="email" class="form-control email-addres" id="inputEmail4" placeholder="Email"/>
           <input type="email" class="form-control phn-num" id="inputEmail4" placeholder="Email"/>
           <div className="row">
            <div className="col-6">
            <input type="email" class="form-control phn-num" id="inputEmail4" placeholder="Email"/>
            </div>
            <div className="col-6">
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
            </div>
           </div>
           <div className="row">
            <div className="col-12">
            <select id="cars" name="Contry" className='selection'>
  <option value="volvo" disabled>Country</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
          </select>
            </div>
          
           </div>
         </div>
          
          <div className="next-btn-div">
          <button className='next-btn'>Next</button>
          </div>
         
         </form>
        </div>
      </div>

      {/*accordian  */}
      <div className="container-fluid accodian-con">
        <h1 className="faq-heading">FAQ</h1>
        {/* accordian body */}
        <div class="accordion">
          <details>
            <p>
              You can apply for the Alim program through the Tarteel mobile app
              or by filling out this form
            </p>
            <summary className="sumarries" onClick={chngIcon}>
              <div class="faq-arrow">
                {angle ? (
                  <img
                    src={angleup}
                    alt=""
                    srcset=""
                    width={20}
                    className="downangel"
                  />
                ) : (
                  <img src={angleDown} alt="" srcset="" width={20} />
                )}
              </div>
              <h5>How do I apply for the Alim Program? </h5>
            </summary>
          </details>
          <details>
            <p>
              You can apply for the Alim program through the Tarteel mobile app
              or by filling out this form
            </p>
            <summary className="sumarries" onClick={chngIcon}>
              <div class="faq-arrow">
                {angle ? (
                  <img
                    src={angleup}
                    alt=""
                    srcset=""
                    width={20}
                    className="downangel"
                  />
                ) : (
                  <img src={angleDown} alt="" srcset="" width={20} />
                )}
              </div>
              <h5>How do I apply for the Alim Program? </h5>
            </summary>
          </details>
          <details>
            <p>
              You can apply for the Alim program through the Tarteel mobile app
              or by filling out this form
            </p>
            <summary className="sumarries" onClick={chngIcon}>
              <div class="faq-arrow">
                {angle ? (
                  <img
                    src={angleup}
                    alt=""
                    srcset=""
                    width={20}
                    className="downangel"
                  />
                ) : (
                  <img src={angleDown} alt="" srcset="" width={20} />
                )}
              </div>
              <h5>How do I apply for the Alim Program? </h5>
            </summary>
          </details>
          <details>
            <p>
              You can apply for the Alim program through the Tarteel mobile app
              or by filling out this form
            </p>
            <summary className="sumarries" onClick={chngIcon}>
              <div class="faq-arrow">
                {angle ? (
                  <img
                    src={angleup}
                    alt=""
                    srcset=""
                    width={20}
                    className="downangel"
                  />
                ) : (
                  <img src={angleDown} alt="" srcset="" width={20} />
                )}
              </div>
              <h5>How do I apply for the Alim Program? </h5>
            </summary>
          </details>
          <details>
            <p>
              You can apply for the Alim program through the Tarteel mobile app
              or by filling out this form
            </p>
            <summary className="sumarries" onClick={chngIcon}>
              <div class="faq-arrow">
                {angle ? (
                  <img
                    src={angleup}
                    alt=""
                    srcset=""
                    width={20}
                    className="downangel"
                  />
                ) : (
                  <img src={angleDown} alt="" srcset="" width={20} />
                )}
              </div>
              <h5>How do I apply for the Alim Program? </h5>
            </summary>
          </details>
          <details>
            <p>
              You can apply for the Alim program through the Tarteel mobile app
              or by filling out this form
            </p>
            <summary className="sumarries" onClick={chngIcon}>
              <div class="faq-arrow">
                {angle ? (
                  <img
                    src={angleup}
                    alt=""
                    srcset=""
                    width={20}
                    className="downangel"
                  />
                ) : (
                  <img src={angleDown} alt="" srcset="" width={20} />
                )}
              </div>
              <h5>How do I apply for the Alim Program? </h5>
            </summary>
          </details>
          <details>
            <p>
              You can apply for the Alim program through the Tarteel mobile app
              or by filling out this form
            </p>
            <summary className="sumarries" onClick={chngIcon}>
              <div class="faq-arrow">
                {angle ? (
                  <img
                    src={angleup}
                    alt=""
                    srcset=""
                    width={20}
                    className="downangel"
                  />
                ) : (
                  <img src={angleDown} alt="" srcset="" width={20} />
                )}
              </div>
              <h5>How do I apply for the Alim Program? </h5>
            </summary>
          </details>
          <details>
            <p>
              You can apply for the Alim program through the Tarteel mobile app
              or by filling out this form
            </p>
            <summary className="sumarries" onClick={chngIcon}>
              <div class="faq-arrow">
                {angle ? (
                  <img
                    src={angleup}
                    alt=""
                    srcset=""
                    width={20}
                    className="downangel"
                  />
                ) : (
                  <img src={angleDown} alt="" srcset="" width={20} />
                )}
              </div>
              <h5>How do I apply for the Alim Program? </h5>
            </summary>
          </details>
        </div>
      </div>

      {/* Donation Feature */}
      <div className="container">
        <h1 className="gurntee-h1">Donation Guarantee</h1>
        <p className="text-center">
          Be Sure That Your Donation Is Being Used Effectively
        </p>
        <div className="gurntee-parent">
          <div className="grnte-1">
            <div className="dot-off"></div>
            <h4 className="pt-3">Monthly Reports</h4>
            <div className="pad">
              Alim participants have to fill out a financial need application
              and showcase their commitment for memorizing the Quran
            </div>
          </div>
          <div className="grnte-1">
            <div className="dot-off"></div>
            <h4 className="pt-3">Monthly Reports</h4>
            <div className="pad">
              Alim participants have to fill out a financial need application
              and showcase their commitment for memorizing the Quran
            </div>
          </div>
          <div className="grnte-1">
            <div className="dot-off"></div>
            <h4 className="pt-3">Monthly Reports</h4>
            <div className="pad">
              Alim participants have to fill out a financial need application
              and showcase their commitment for memorizing the Quran
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default DonComOne
