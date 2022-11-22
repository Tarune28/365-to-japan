import "./Header.css";
import React, { useEffect, useState } from "react";
import logo from "../../365.png"
import { Outlet, Link } from "react-router-dom";

function Header() {
  let [scroll, setScroll] = useState(false);
  useEffect(() => {
  
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  
  return (
    // Navbar (sit on top)
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className={scroll ? "card white site-navbar-sticky site-navbar site-navbar-target" : "site-navbar-sticky site-navbar site-navbar-target"} role="banner" id="navbar">
        <div className="container-xl">
          <div className="row align-items-center position-relative">
            <div className="col-3">
              <div className="site-logo">
                <img src={logo} style={{maxHeight: "90px", padding: "10px"}}/>
              </div>
            </div>

            <div className="col-9 text-right">
              <span className="d-inline-block d-lg-none">
                <a
                  href="#"
                  className="text-primary site-menu-toggle js-menu-toggle py-5"
                >
                  <span className="icon-menu h3 text-white"></span>
                </a>
              </span>

              <nav
                className="site-navigation text-right ml-auto d-none d-lg-block"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li className={window.location.pathname == "/" ? "active" : "nav-link"}>
                    <a href="/" className="nav-link">Home</a>
                  </li>
                  <li className={window.location.pathname == "/blogs" ? "active" : "nav-link"}>
                  <a href="/blogs" className="nav-link">Blogs</a>
                  </li>
                  <li className={window.location.pathname == "/about" ? "active" : "nav-link"}>
                  <a href="/about" className="nav-link">About</a>
                  </li>
                  <li className={window.location.pathname == "/contact" ? "active" : "nav-link"}>
                  <a href="/contact" className="nav-link">Contact</a>
                  </li>
                  <li className={window.location.pathname == "/login" ? "active" : "nav-link"}>
                  <a href="/login" className="nav-link">Dashboard Portal</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;