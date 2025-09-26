import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

import Et5Pix from "../images/ET5B9195.jpeg";
import imagen from "../images/Imagen-4.jpg";
import BreadAndBeans from "../images/breadBeans.webp";
import jellof from "../images/images (4).jpeg";

import "./Home.css";
import "../cart/Cart.css";
import '../component/GeneralStyles.css'

const SubHomeDishes = () => {
  return (
    <div className="container-fluid">
      <div className="row  ">
        <h4 className="text-center fw-bolder text-muted ourLandinAnimate2">Our Popular menu</h4>
        <div className="d-lg-flex flex-wrap   row-gap-5 dCaptionText">
          <div className=" d-flex flex-nowrap align-items-center px-md-5 col-lg-6 mb-3 mb-lg-0 overFlow">
            <div className="col-3 me-3">
              <div className="CartImg-div">
                <img src={BreadAndBeans} alt="" className=" rounded" />
              </div>
            </div>

            <div className="col-11 col-md-6 d-flex justify-content-around align-items-center">
              <p className="fw-bold flex-nowrap  pt-3 phoneSubmenuText1">
                Beans and bread, accompined with cold mineral, saussage,
                pineapple, mango juice
              </p>

              <p className="fw-bold pt-3">₦2,900</p>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="p-2 rounded-circle border-inf border-0 generalColor"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fw-bolder fs-5 trash"
                />
              </button>
            </div>
          </div>
          <div className=" d-flex flex-nowrap align-items-center px-md-5 col-lg-6  mb-3 mb-lg-0 overFlow">
            <div className="col-3 me-3">
              <div className="CartImg-div">
                <img src={jellof} alt="" className=" rounded" />
              </div>
            </div>

            <div className="col-11 col-md-6 d-flex justify-content-around align-items-center">
              <p className="fw-bold flex-nowrap  pt-3 phoneSubmenuText1">
                jellof Rice and Plantain, accompined with cold mineral, saussage,
                pineapple, mango juice
              </p>

              <p className="fw-bold pt-3">₦2,900</p>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="p-2 rounded-circle border-inf border-0 generalColor"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fw-bolder fs-5 trash"
                />
              </button>
            </div>
          </div>
          <div className=" d-flex flex-nowrap align-items-center px-md-5 col-lg-6  mb-3 mb-lg-0 overFlow">
            <div className="col-3 me-3">
              <div className="CartImg-div">
                <img src={imagen} alt="" className=" rounded" />
              </div>
            </div>

            <div className="col-11 col-md-6 d-flex justify-content-around align-items-center">
              <p className="fw-bold flex-nowrap  pt-3 phoneSubmenuText1">
                white Rice and Meat, accompined with cold mineral, saussage,
                pineapple, mango juice
              </p>

              <p className="fw-bold pt-3">₦2,900</p>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="p-2 rounded-circle border-inf border-0 generalColor"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fw-bolder fs-5 trash"
                />
              </button>
            </div>
          </div>
          <div className=" d-flex flex-nowrap align-items-center px-md-5 col-lg-6  mb-3 mb-lg-0 overFlow">
            <div className="col-3 me-3">
              <div className="CartImg-div">
                <img src={Et5Pix} alt="" className=" rounded" />
              </div>
            </div>

            <div className="col-11 col-md-6 d-flex justify-content-around align-items-center">
              <p className="fw-bold flex-nowrap  pt-3 phoneSubmenuText1">
                Fried Rice and Chicken, accompined with cold mineral, saussage,
                pineapple, mango juice
              </p>

              <p className="fw-bold pt-3">₦2,900</p>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="p-2 rounded-circle border-inf border-0 generalColor"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fw-bolder fs-5 trash"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHomeDishes;
