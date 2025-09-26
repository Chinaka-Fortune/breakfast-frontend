import React from "react";
import aboutImage from "../images/garnish.jpeg";
import images1 from "../images/download (2).jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-bootstrap";
import '../component/GeneralStyles.css'

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 scaleAnime">
            <div className="row g-3">
              <div className="col-6">
                <div className="text-start">
                  <img
                    src={aboutImage}
                    alt=""
                    className="img-fluid rounded w-100 ZoomIn wow"
                  />
                </div>
              </div>{" "}
              <div className="col-6 text-start">
                <img
                  src={images1}
                  alt=""
                  className="img-fluid rounded w-100 ZoomIn wow"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h5 className=" text-info text-start fw-normal ourLandinAnimate2">
              About Us
            </h5>
            <h1 className="mb-4 ourLandinAnimate2">
              Welcome To{" "}
              <FontAwesomeIcon
                icon={faUtensils}
                className="text-info fw-bolder fs-3"
              />{" "}
              Resturant{" "}
            </h1>
            <p className="mb-4 dCaptionText2Anime">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas,
              ea quo reiciendis error et? ipsum dolor, sit amet consectetur
              adipisicing elit. Modi eligendi reprehenderit voluptas
              repellendus.
            </p>
            <p className="mb-4 dCaptionText2Anime">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas,
              ea quo reiciendis error et? ipsum dolor, sit amet consectetur
              adipisicing elit. Modi eligendi reprehenderit voluptas
              repellendus.
            </p>

            <div className="row g-4 mb-4 ourLandinAnimate2">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-info px-3">
                  <h1 className="flex-shrink-0 display-5 text-info mb-0   ">
                    15
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0 fw-bolder">
                      Experience
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-info px-3">
                  <h1 className="flex-shrink-0 display-5 text-info mb-0   ">
                    50
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0 fw-bolder">
                      Master Chefs
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <NavLink
              to="/"
              className="btn btn-info px-5 py-3 mt-3 fw-bolder bg-info"
            >
              Read More
            </NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
