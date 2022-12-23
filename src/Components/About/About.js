import React from "react";
import centerImg from "../../images/White.svg";
import teamimgone from "../../images/team-img1.jpeg";
import teamimgtwo from "../../images/teamImg-2.jpeg";
import teamimgthree from "../../images/tem-three.jpeg";
import advisorone from "../../images/advisor-1.jpeg";
import advisortwo from "../../images/advisor-2.jpeg";
import "../../Components/About/About.css";

function About() {
  return (
    <div>
      <div className="container about-con">
        <div className="about-icon-holder m-auto">
          <img src={centerImg} alt="Logo" className="about-app-icon" />
        </div>
        <h1 className="about-heading">Our Story</h1>
        <div className="about-para">
          Tarteel was founded with one mission: to strengthen the relationship
          Muslims have with the Quran. This goal has been at the very heart of
          Tarteel since its inception, and we continue to strive to provide the
          proper tools to empower the Muslim ummah to better connect with the
          words of Allah SWT, nourishing their faith in doing so. Supported by
          years of experience in the tech industry, we have fused AI technology
          with our love of the Quran to create a platform that delivers a new
          way of approaching four key areas of focus: <br /> <br /> reading,
          understanding, memorizing, and reciting. Inspired by the Islamic
          Golden Age, we saw untapped potential in the area of religious
          technology. We built Tarteel to help Muslims improve their Quranic
          study using the best digital tools. From students seeking additional
          support outside the classroom and those trying to squeeze extra
          minutes of reading in on commutes and lunch breaks, to parents in busy
          households and those who would prefer to read and recite in their own
          comfort zone, Tarteel is there to serve your passion <br />
          <br /> the Quran and help you reach your goals. The Quran is a
          journey, and Tarteel is your companion.
        </div>
      </div>

      <div className="container next-con">
        <h1 className="about-heading"> Next Day</h1>
        <p className="text-center about-para">
          Tarteel serves over 500,000 Muslims and has made great advancements to
          deliver live Quran Mistake Detection and other innovative new
          features. Stay tuned for more updates!
        </p>
      </div>

      <div className="container-fluid vales-con">
        <div className="about-values">
          <div className="values-heading">
            <h1 className="about-heading mt-5 pt-5">
              We’re driven by our values
            </h1>
            <p className="text-center strive-para">
              We strive to reflect the values the Prophet Mohamed - ﷺ - taught
              his Ummah and follow in his stead.
            </p>
          </div>
        </div>
        <div className="container pricing-fea my-5 py-5">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-lg-4">
              <div className="col-fea">
                <div className="icon">
                  <i class="fas-flg fa-solid  fa-flag fa-2x "></i>
                </div>
                <h5 className="py-2">Mistake Detection</h5>
                <p className="text-center">
                  Tarteel is led first and foremost by the guiding principles of
                  Islam, an unwavering devotion to earning the pleasure of Allah
                  SWT, and following in the stead of our beloved Prophet
                  Mohammed SAW. This drives all of our decision making and
                  innovation, and we hope that Tarteel serves the ummah for
                  generations to come. We’re here to serve the Muslim ummah and
                  ask Allah SWT to keep us on the right path. Please keep the
                  Tarteel team in your duas.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4" col-sm-12>
              <div className="col-fea">
                <div className="icon">
                  <i class="fas-heart fa-regular fa-heart fa-2x"></i>
                </div>
                <h5 className="py-2">Mistake Detection</h5>
                <p className="text-center">
                  Get alerted when you make a word-level mistake (tashkeel and
                  tajweed mistakes not currently supported).
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4">
              <div className="col-fea">
                <div className="icon">
                  <i class="fas-spin fa-solid fa-arrows-spin fa-2x"></i>
                </div>
                <h5 className="py-2">Mistake Detection</h5>
                <p className="text-center">
                  Get alerted when you make a word-level mistake (tashkeel and
                  tajweed mistakes not currently supported).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <h1 className="about-heading"> Core Team</h1>
        <p className="text-center about-para">
          A team of Silicon Valley veterans passionate about serving the Quran
        </p>
        <div class="Team-div">
    
          <div className="Team-1">
            <img src={teamimgone} alt="" srcset="" width={50} />
            <div className="OverLaY"></div>
            <div className="inner-team">
            <h4>Anas Abou Allaban</h4>
            <p className="ceo">CEO <i class="fa-brands fa-linkedin"></i></p>
            <p className="position-para">Anas was previously a software engineer at Amazon on the RoboMaker platform.
He brings his robotics and AI research experience from Carnegie Mellon and Northeastern University.
You might catch him giving the Khutbah of the jummah prayer at your local masjid.</p>
            </div>
           
          </div>
          <div className="Team-1">
            <img src={teamimgtwo} alt="" srcset="" width={50} />
            <div className="OverLaY"></div>
            <div className="inner-team">
            <h4>Anas Abou Allaban</h4>
            <p className="ceo">CEO <i class="fa-brands fa-linkedin"></i></p>
            <p className="position-para">Anas was previously a software engineer at Amazon on the RoboMaker platform.
He brings his robotics and AI research experience from Carnegie Mellon and Northeastern University.
You might catch him giving the Khutbah of the jummah prayer at your local masjid.</p>
            </div>
            
          </div>
          <div className="Team-1">
          
            <img src={teamimgthree} alt="" srcset="" width={50} className="p" />
            <div className="OverLaY"></div>
            <div className="inner-team">
            <h4>Anas Abou Allaban</h4>
            <p className="ceo">CEO <i class="fa-brands fa-linkedin"></i></p>
            <p className="position-para">Anas was previously a software engineer at Amazon on the RoboMaker platform.
He brings his robotics and AI research experience from Carnegie Mellon and Northeastern University.
You might catch him giving the Khutbah of the jummah prayer at your local masjid.</p>
            </div>
          
          </div>
          </div>
          
         
        </div>

        {/* /advisor */}
        <div className="container mt-5 pt-5 ">
        <h1 className="about-heading mt-5"> Advisor</h1>
        <p className="text-center about-para">
        Visionaries guiding the Tarteel team towards success
        </p>
        <div class="row advisor-div">
          <div className="advisor-1">
            <img src={advisorone} alt="" srcset=""/>
            <div className="OverLaYs"></div>
            <div className="inner-team">
            <h4>Anas Abou Allaban</h4>
            <p className="ceo">CEO <i class="fa-brands fa-linkedin"></i></p>
            <p className="position-para">Anas was previously a software engineer at Amazon on the RoboMaker platform.
He brings his robotics and AI research experience from Carnegie Mellon and Northeastern University.
You might catch him giving the Khutbah of the jummah prayer at your local masjid.</p>
            </div> 
          </div>
          <div className="advisor-1">
            <img src={advisortwo} alt="" srcset="" />
            <div className="OverLaYs"></div>
            <div className="inner-team">
            <h4>Anas Abou Allaban</h4>
            <p className="ceo">CEO <i class="fa-brands fa-linkedin"></i></p>
            <p className="position-para">Anas was previously a software engineer at Amazon on the RoboMaker platform.
He brings his robotics and AI research experience from Carnegie Mellon and Northeastern University.
You might catch him giving the Khutbah of the jummah prayer at your local masjid.</p>
            </div>
          </div>
          </div>
         
         
          </div>
     

        {/* news */}
        <div className="container-fluid accodian-con">
        <h1 className="about-heading mt-5 pt-5">Tarteel News</h1>
        <p className="text-center about-para">
        The latest news about Tarteel
        </p>
        {/* accordian body */}
        <div class="accordion  py-5">
          <div className="new-row my-3 p-2">
          <p className="new-titel"><a href="">November 10-2020 Navinda GTC</a></p>
          <div className="h4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium!</div>
          </div>
          <div className="new-row my-3 p-2">
          <p className="new-titel"><a href="">November 10-2020 Navinda GTC</a></p>
          <div className="h4 new-detail">  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium!</div>
          </div>
          <div className="new-row my-3 p-2">
          <p className="new-titel"><a href="">November 10-2020 Navinda GTC</a></p>
          <div className="h4 new-detail
          ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium!</div>
          </div>
          <div className="new-row my-3 p-2">
          <p className="new-titel"><a href="">November 10-2020 Navinda GTC</a></p>
          <div className="h4 new-detail
          ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium!</div>
          </div>
          <div className="new-row my-3 p-2">
          <p className="new-titel"><a href="">November 10-2020 Navinda GTC</a></p>
          <div className="h4 new-detail
          "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium!</div>
          </div>  <div className="new-row my-3 p-2">
          <p className="new-titel"><a href="">November 10-2020 Navinda GTC</a></p>
          <div className="h4 new-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium!</div>
          </div>

        </div>
      </div>
      </div>
    
  );
}

export default About;
