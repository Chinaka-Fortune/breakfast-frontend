import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faUtensils, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Et5Pix from "../images/ET5B9195.jpeg";
import imagen from '../images/Imagen-4.jpg'
import BreadAndBeans from '../images/breadBeans.webp'
import jellof from '../images/images (4).jpeg'

const SubHomeDishes = () => {
  return (
    <div className="container-xxl pb-5">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <h5 className="section-title ff-secondary text-center text-info fw-normal">
            Food Menu
          </h5>
          <h1 className="mb-5">Most Porpular Items</h1>
        </div>
        <div
          className="tab-class text-center wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <ul className="nav nav-pills d-inline-flex justify-content-center border-buttom mb-5">
            <li className="nav-item">
              <NavLink className="d-flex align-items-center text-start mx-3 pb-3 text-decoration-none">
                <FontAwesomeIcon
                  icon={faHamburger}
                  className="text-info fw-bolder fs-3"
                />
                <div className="ps-3">
                  <small className="text-muted">Special</small>
                  <h6 className="mt-n1 mb-0 fw-bolder">Launch</h6>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="d-flex align-items-center text-start mx-3 pb-3 text-decoration-none">
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="text-info fw-bolder fs-3"
                />
                <div className="ps-3">
                  <small className="text-muted">Lovely</small>
                  <h6 className="mt-n1 mb-0 fw-bolder">Dinner</h6>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="d-flex align-items-center text-start mx-3 pb-3 text-decoration-none">
                <FontAwesomeIcon
                  icon={faCoffee}
                  className="text-info fw-bolder fs-3"
                />
                <div className="ps-3">
                  <small className="text-muted">Tasty </small>
                  <h6 className="mt-n1 mb-0 fw-bolder">BreakFast</h6>
                </div>
              </NavLink>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img
                      src={Et5Pix}
                      alt=""
                      className="img-fluid w-25 h-50 flex-shrinks-0 rounded"
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>chinese rice and chicken </span>
                        <span className="text-info">₦2,700</span>
                      </h5>
                      <small className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repudiandae ad iusto.</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img
                      src={imagen}
                      alt=""
                      className="img-fluid w-25 h-50 flex-shrinks-0 rounded"
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>White rice and stew </span>
                        <span className="text-info">₦1,400</span>
                      </h5>
                      <small className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repudiandae ad iusto.</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img
                      src={BreadAndBeans}
                      alt=""
                      className="img-fluid w-25 h-50 flex-shrinks-0 rounded ratio ratio-16x9"
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>Bread and Beans </span>
                        <span className="text-info">₦1,000</span>
                      </h5>
                      <small className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repudiandae ad iusto.</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img
                      src={jellof}
                      alt=""
                      className="ratio ratio-1x1 img-fluid w-25 h-50 flex-shrinks-0 rounded"
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>Jellof, plantain and chicken </span>
                        <span className="text-info">₦3,200</span>
                      </h5>
                      <small className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repudiandae ad iusto.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHomeDishes;
