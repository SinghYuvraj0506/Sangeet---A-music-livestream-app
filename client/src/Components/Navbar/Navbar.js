import React, { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const location = useLocation()
  const handleScroll = () => {
    if(document.querySelector(".navbar-container")){

      if (window.scrollY > 15) {
        document.querySelector(".navbar-container").style.backgroundColor =
        "black";
      } else {
        document.querySelector(".navbar-container").style.backgroundColor =
        "#4040404e";
      }
    }
  };

  document.addEventListener("scroll", handleScroll);

  return (
    <div className="navbar-container">
      <ul className="left_section_navbar">
        <Link className={location.pathname === "/" ? "active_nav" : ""} to="/"><li >HOME</li></Link>
        <Link className={location.pathname === "/explore" ? "active_nav" : ""} to="/explore"><li >EXPLORE</li></Link>
        <Link className={location.pathname === "/search" ? "active_nav" : ""} to="/search"><li >SEARCH</li></Link>
        <Link className={location.pathname === "/profile" ? "active_nav" : ""} to="/profile"><li >PROFILE</li></Link>
        <Link className={location.pathname === "/about" ? "active_nav" : ""} to="/about"><li >ABOUT</li></Link>
      </ul>
      <span>LOGO</span>
    </div>
  );
}

export default Nav;
