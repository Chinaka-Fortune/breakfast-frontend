import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import "../component/GeneralStyles.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark sticky-top w-100 ">
      <div className="container-fluid d-flex align-item-center justify-content-between px-lg-5">
        <div className="navbar-brandDiv d-flex align-items-center justify-content-center">
          <NavLink className="navbar-brand d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faUtensils} className="fs-1 text-info" />
          </NavLink>
        </div>

        <div>
          <button
            className="navbar-toggler border-white focus-ring focus-ring-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="bi bi-list text-white "></i>
            </span>
          </button>
        </div>

        <div className=" d-none d-md-block ">
          <div>
            <ul className="navbar-nav nav-underline d-flex justify-content-center align-items-center ">
              <NavLink
                className="text-decoration-none  navStyling"
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                Home
                <span></span>
              </NavLink>

              <NavLink
                className="text-decoration-none navStyling"
                to="/menu"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                Menu
                <span></span>
              </NavLink>

              <NavLink
                className="text-decoration-none navStyling"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                About Us
                <span></span>
              </NavLink>

              <NavLink
                className="text-decoration-none navStyling"
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                Contact Us
                <span></span>
              </NavLink>
              <NavLink
                className="text-decoration-none px-2 px-md-4 py-2 bg-info text-dark"
                to="/book_a_table"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                Book A Table
                <span></span>
              </NavLink>

              <NavLink
                className="text-decoration-none p-2 rounded-circle bg-info"
                to="/cart"
              >
                <FontAwesomeIcon icon={faCartPlus} className="text-white" />
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      <div className=" side-width position-fixed top-0 start-0 mt-5 w-100  d-md-none hoverTextDiv">
        <div
          className="collapse  navbar-collapse  pb-3 phone-nav-color phoneBorder "
          id="navbarNav"
        >
          <ul className="navbar-nav nav-underline phone-transform mt-3 ">
            <li className=" hoverText nav-item ">
              <NavLink
                className="text-decoration-none fs-5 py-2 text-center  hoverText d-block w-100 liNav"
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  Home
                </span>
              </NavLink>
            </li>
            <li className="hoverText nav-item ">
              <NavLink
                className="text-decoration-none fs-5 py-2 text-center  hoverText d-block w-100 liNav"
                to="/menu"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  Menu
                </span>
              </NavLink>
            </li>
            <li className="hoverText nav-item ">
              <NavLink
                className="text-decoration-none fs-5 py-2 text-center hoverText d-block w-100 liNav"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  About Us
                </span>
              </NavLink>
            </li>
            <li className="hoverText nav-item ">
              <NavLink
                className="text-decoration-none fs-5 py-2  hoverText d-block w-100 liNav text-center"
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  Contact us
                </span>
              </NavLink>
            </li>
            
              <NavLink
                className="text-decoration-none fs-5 py-2 hoverTex d-block w-100 text-center"
                to="/cart"
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav" className="border-info border rounded-circle p-3">
                  <FontAwesomeIcon icon={faCartPlus} className="text-white" />
                </span>
              </NavLink>
            
            {/* <li className=" text-decoration-none fs-5 ps-3 py-2 hoverText "> */}
              <NavLink
                className="text-decoration-none px-2 px-md-4 py-2 bg-info text-dark w-50 mx-auto rounded-pill text-center fw-bolder"
                to="/book_a_table"
                role="button"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  Book A Table
                </span>
              </NavLink>
            {/* </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
