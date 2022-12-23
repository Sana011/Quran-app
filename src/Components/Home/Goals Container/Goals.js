import React from "react";
import cover from "../../../images/MobileFrame.png";
import streak from "../../../images/streak-img.png";
import challenges from "../../../images/challenges.png";
import raeef from "../../../images/download1.jpeg";
import "../../../Components/Home/Goals Container/Goals.css";
function Goals() {
  return (
    <div>
      <div className="container-fluid goals-outer-container" id="g">
        <div className="container goals-inner-container">
          <h1 className="goals-heading">CRUSH YOUR GOALS</h1>
          <p className="goals-para">
            We've crafted the best experiences to help you make the Quran a
            daily habit
          </p>
          <div className="row goals-row">
            <div className="col-lg-5 col-md-12 goals-row-1 mt-5 ">
              <div className="main">
                <img src={cover} alt="" srcset="" className="frame-1" />
                <img src={streak} alt="" srcset="" className="streak" />
                <div className="content-goal">
                  <h4 className="challenge-heading">Streaks</h4>
                  <p className="challange-para">
                    Build up a streak by reciting the Quran and track how your
                    engagement changes over time
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 goals-row-1 mt-5 ">
              <div className="main">
                <img src={cover} alt="" srcset="" className="frame-1" />
                <img
                  src={challenges}
                  alt=""
                  srcset=""
                  className="challenges-img"
                />
                <div className="content-goal">
                  <h4 className="challenge-heading">Streaks</h4>
                  <p className="challange-para">
                    Build up a streak by reciting the Quran and track how your
                    engagement changes over time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-2text-center">
          <h1 className="heading-container-2 my-5">Don't take our word for it.</h1>
          <div className="row mb-3 cards-row">
          <div className="col-md-4 col-lg-4 col-sm-4 cards-body">
                <div className="cards-con">
                <img src={raeef} alt="" srcset="" className="testimonial-img" />
                <div className="name-email">  
                <div>Joe Bradford</div>
                <p className="emails">@joebradford</p>
                </div>
                </div>
                <div className="long-para">I started using this the other day. I was skeptical that it would work, but when I made mistakes it paused and when I re-read verses due to Waqf etc it tracked where I started from. I was also in a loud room with a TV on in the background, and it still worked.</div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 cards-body">
                <div className="cards-con">
                <img src={raeef} alt="" srcset="" className="testimonial-img" />
                <div className="name-email">
                    
                <div>Joe Bradford</div>
                <p className="emails">@joebradford</p>
                </div>
                </div>
                <div className="long-para">I started using this the other day. I was skeptical that it would work, but when I made mistakes it paused and when I re-read verses due to Waqf etc it tracked where I started from. I was also in a loud room with a TV on in the background, and it still worked.</div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 cards-body">
                <div className="cards-con">
                <img src={raeef} alt="" srcset="" className="testimonial-img" />
                <div className="name-email">
                    
                <div>Joe Bradford</div>
                <p className="emails">@joebradford</p>
                </div>
                </div>
                <div className="long-para">I started using this the other day. I was skeptical that it would work, but when I made mistakes it paused and when I re-read verses due to Waqf etc it tracked where I started from. I was also in a loud room with a TV on in the background, and it still worked.</div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 cards-body">
                <div className="cards-con">
                <img src={raeef} alt="" srcset="" className="testimonial-img" />
                <div className="name-email">
                    
                <div>Joe Bradford</div>
                <p className="emails">@joebradford</p>
                </div>
                </div>
                <div className="long-para">I started using this the other day. I was skeptical that it would work, but when I made mistakes it paused and when I re-read verses due to Waqf etc it tracked where I started from. I was also in a loud room with a TV on in the background, and it still worked.</div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 cards-body">
                <div className="cards-con">
                <img src={raeef} alt="" srcset="" className="testimonial-img" />
                <div className="name-email">
                    
                <div>Joe Bradford</div>
                <p className="emails">@joebradford</p>
                </div>
                </div>
                <div className="long-para">I started using this the other day. I was skeptical that it would work, but when I made mistakes it paused and when I re-read verses due to Waqf etc it tracked where I started from. I was also in a loud room with a TV on in the background, and it still worked.</div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 cards-body">
                <div className="cards-con">
                <img src={raeef} alt="" srcset="" className="testimonial-img" />
                <div className="name-email">
                    
                <div>Joe Bradford</div>
                <p className="emails">@joebradford</p>
                </div>
                </div>
                <div className="long-para">I started using this the other day. I was skeptical that it would work, but when I made mistakes it paused and when I re-read verses due to Waqf etc it tracked where I started from. I was also in a loud room with a TV on in the background, and it still worked.</div>
            </div>
          </div>
        </div>
        <button className="show-more-btn">ShOW More</button>
      </div>
    </div>
  );
}

export default Goals;
