import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons/faUtensils";
import "./NavBar.css";
import "../component/GeneralStyles.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark sticky-top w-100 py-2">
      <div className="container-fluid d-flex align-item-center justify-content-md-around px-lg-5">
        <div className="navbar-brandDiv d-flex align-items-center justify-content-center">
          <NavLink className="navbar-brand d-flex align-items-center justify-content-center">
           {/* <span className="fw-bolder fs-4 text-danger">YOUR</span><span className="text-primary fw-bolder fs-4"><em>LOGO</em></span> */}
           <FontAwesomeIcon icon={faUtensils} className="fs-1 text-info"/>
          </NavLink>
        </div>

        <div>
          <button
            className="navbar-toggler border-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className=" d-none d-md-block w-75">
          <div>
            <ul className="navbar-nav nav-underline d-flex justify-content-center align-items-center px-5">
              
                <NavLink
                  className="text-decoration-none  navStyling"
                  to="/"
                >
                  Home
                  <span></span>
                </NavLink>
              
              
                <NavLink
                  className="text-decoration-none navStyling"
                  to="/menu"
                 
                >
                  Menu
                  <span></span>
                </NavLink>
              
              
                <NavLink
                  className="text-decoration-none navStyling"
                  to="/service"
                  
                >
                  Service
                  <span></span>
                </NavLink>
              
    
                <NavLink
                  className="text-decoration-none navStyling"
                  to="/about"
                >
                  About Us
                  <span></span>
                </NavLink>

                <NavLink
                  className="text-decoration-none navStylin px-sm-3 py-sm-1 text-white bg-info fw-bolder rounded-pill"
                  to="/contact"
                >
                  Book a Table
                  <span></span>
                </NavLink>
              
            </ul>
          </div>
        </div>
      </div>


      <div className="  side-width d-md-none border-bottom ">
          <div
            className="collapse  navbar-collapse phone-nav-color phoneBorder phoneNav"
            id="navbarNav" 
          >
            <ul className="navbar-nav phone-transform">
                
                <NavLink
                  className="text-decoration-none navStyling2"
                  to="/" 
                >
                  <span data-bs-toggle='collapse' data-bs-target='#navbarNav'>Home</span>
                </NavLink>
                
                <NavLink
                  className="text-decoration-none"
                  to="/about"
                >
                  <span data-bs-toggle='collapse' data-bs-target='#navbarNav'>Dishes</span>
                </NavLink>
              
                <NavLink
                  className="text-decoration-none"
                  to="/blog" 
                >
                  <span data-bs-toggle='collapse' data-bs-target='#navbarNav'>About Us</span>
                </NavLink>
                

                  <NavLink
                  className="text-wrap-nowrap  text-decoration-none"
                  to="/contact"
                >
                  <span data-bs-toggle='collapse' data-bs-target='#navbarNav'>Service</span>
                </NavLink>
              
              
                  <NavLink
                  className="  text-decoration-none"
                  to="/contact"
                >
                  <span data-bs-toggle='collapse' data-bs-target='#navbarNav'>Contact us</span>
                </NavLink>
              
            </ul>
          </div>
        </div>
    </nav>
  );
};

export default NavBar;
