import React, { useState } from "react";
// import {useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell} from "@fortawesome/free-solid-svg-icons";
import userImage from "./33-336800_chef-hat-png-download-chef-cartoon-head-png.png";

import "./DashBoard.css";
import "../component/GeneralStyles.css";

import { NavLink } from "react-router-dom";

import LandingDashboard from "./LandingDashboard";
import PostContent from "./PostContent";
import Orders from "./Orders";
import Message from "./Message";

const DashBoard = () => {

  const [activeFile, setActiveFile] = useState(null)

  const handleClickButton = (targetedFile) =>{
    if(activeFile === targetedFile){
      setActiveFile(null)
    }else{
      setActiveFile(targetedFile)
    }
  }

  return (
    <>
      <div className="heroContainer mb-5">
        <div className="topBar">
          <div className="logo">
            <h2 className="h2">Brand</h2>
          </div>
          <div className="search">
            <input type="search" name="" id="search" placeholder="search..." />
            <label htmlFor="search">
              <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            </label>
          </div>
          <FontAwesomeIcon icon={faBell} className="navBell" />
          <div className="userDiv">
            <img src={userImage} alt="" />
          </div>
        </div>

        <div className="sideBar">
          <ul>
            <li onClick={() => handleClickButton('LandingDashboard')}>
              <NavLink className="NavList">
                <i class="bi bi-grid-3x3-gap-fill"></i>
                <div className="">Dashboard</div>
              </NavLink>
            </li>
            <li onClick={() => handleClickButton('PostContent')}>
              <NavLink className="NavList">
                <i class="bi bi-pencil-square"></i>
                <div className="">Post</div>
              </NavLink>
            </li>
            <li onClick={() => handleClickButton('Orders')}>
              <NavLink className="NavList">
                <i class="bi bi-bag-check-fill"></i>
                <div className="">Order</div>
              </NavLink>
            </li>
            <li onClick={() => handleClickButton('Message')}>
              <NavLink className="NavList">
                <i class="bi bi-envelope-at"></i>
                <div className="">Message</div>
              </NavLink>
            </li>
            <li onClick={() => handleClickButton('Setting')}>
              <NavLink className="NavList ">
                <i class="bi bi-gear"></i>
                <div className="">Settings</div>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="main">

          {activeFile === 'LandingDashboard' && <LandingDashboard /> } 
          {activeFile === 'PostContent' && <PostContent />} 
          {activeFile === 'Orders' && <Orders />} 
          {activeFile === 'Message' && <Message />} 
          
          
          {/* <Orders />
          <Message /> */}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
