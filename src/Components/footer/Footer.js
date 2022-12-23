import React from "react";
import logo from "../../images/nav-logo.svg";
import "../../Components/footer/footer.css";
function Footer() {
  return (
    <div>
      <div className="container-fluid footer-container mt-5">
        <footer className=" mt-5">
          <div className="icon-row">
            <span className="follow-us"> Follow Us</span>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="footer-links">
            <ul className="footer-ul">
              <img src={logo} alt="" srcset="" className="footer-logod mt-1" />
              <li className="mx-4 f-links">
                <a href="#news">Support</a>
              </li>
              <li className="mx-4 f-links">
                <a href="#news">Privacy Policy</a>
              </li>
              <li className="mx-4 f-links">
                <a href="#news">Terms of Service</a>
              </li>
              <li className="mx-4 f-links">
                <a href="#news">Changelog</a>
              </li>

              <p className=" ms-md-auto">Copyright 2022© Tarteel AI</p>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
