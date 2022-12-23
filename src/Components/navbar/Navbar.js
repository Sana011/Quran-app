import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../images/nav-logo.svg";
import menu from "../../images/menu-icon-white.svg";

import "./navbar.css";


function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleMenu=()=>{
    setToggle(!toggle)
  }
  return (
    <div className="container-fluid ">
    <div class="navBar pt-1 fixed-top" id="myTopnav" role={"Navigaion"}>
   
      <NavLink to="/" ><img className="nav-logo" src={logo} alt="Logo" /></NavLink> 
      <ul className={toggle ? "m-0 menu-items p-0 active" : "m-0 menu-items p-0"}>
      <li className="mx-3 my-3">
        <NavLink to="Pricing" onClick={handleMenu}>Pricing</NavLink>
        </li>
        <li className="mx-3 my-3">
        <NavLink exact to="About" onClick={handleMenu} >
           About</NavLink>
        </li>
        <li className="mx-3 my-3 ">
        <NavLink to="School" onClick={handleMenu}>School</NavLink>
        </li>
        <li className="mx-3 my-3">
        <NavLink to="GiftCards"onClick={handleMenu} >Gift Cards</NavLink>
        </li>
        <li className="mx-3 my-3">
        <NavLink to="Blog">Blog</NavLink>
        </li>
        <li className="mx-3 my-3">
          <NavLink to="Donate"onClick={handleMenu}>Donate</NavLink>
        </li>
        <button className="nav-btn ms-md-auto">Log In</button>
      </ul>
     
      <div className="menuToggle-main" onClick={handleMenu}>
                   <img className="menu-img" src={menu} alt="" srcset=""  />

             
    </div>
    </div>
    </div>
  );
}

export default Navbar;
