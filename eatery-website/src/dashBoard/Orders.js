import React from 'react'
import image2 from "../images/owner1.jpg";

import "./DashBoard.css";
import "../component/GeneralStyles.css";
import "../cart/Cart.css";
const Orders = () => {
  return (
    <div className="container-fluid my-3 ">
                <h3 className="mt-2 fw-bold text-center ">Order Request</h3>
    
                <div className="row ">
                  <div className=" border-bottom border-secondary pb-3">
                    <h3 className="mt-3">Mr Benedict</h3>
                    <div className="col-12 my-3  generalColor py-2 overFlow">
                      <div className="row row-gap-3 ">
                        <div className=" d-flex flex-nowrap align-items-center px-md-5">
                          <div className="col-3 mx-2">
                            <div className="CartImg-div">
                              <img src={image2} alt="" className=" rounded" />
                            </div>
                          </div>
    
                          <div className="col-11 col-md-6 d-flex justify-content-around align-items-center ms-4">
                            <p className="fw-bold flex-nowrap  pt-3">
                              Fried Rice and Chicken
                            </p>
                            <p className="fw-bold pt-3">₦2,900</p>
                          </div>
    
                          <div className="col-3 d-flex align-items-center justify-content-center mt-3">
                            <p className="fw-bold">Qty: 1</p>
                          </div>
                        </div>
    
                        <div className=" d-flex flex-nowrap align-items-center px-md-5">
                          <div className="col-3 mx-2">
                            <div className="CartImg-div">
                              <img src={image2} alt="" className=" rounded" />
                            </div>
                          </div>
    
                          <div className="col-11 col-md-6 d-flex justify-content-around align-items-center ms-4">
                            <p className="fw-bold flex-nowrap  pt-3">
                              Fried Rice and Chicken
                            </p>
                            <p className="fw-bold pt-3">₦2,900</p>
                          </div>
    
                          <div className="col-3 d-flex align-items-center justify-content-center mt-3">
                            <p className="fw-bold">Qty: 1</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-10 px-1">
                      <div className="">
                        <p>
                          <span className="fw-bolder">Special Request:</span> Lorem
                          ipsum dolor, sit amet consectetur adipisicing elit.
                          Nesciunt ipsa quam sint! Eveniet magnam dignissimos iure.
                        </p>
                        <div className="lh-1">
                          <p>
                            <span className="fw-bolder">Addr:</span>No. 3 Ave, off
                            Gov Road{" "}
                          </p>
                          <p>
                            <span className="fw-bolder">Phone:</span>07065734527
                          </p>
                        </div>
                      </div>
                      <div className=" w-100 align-items-center gap-5">
                        <h5>No. of items: 2</h5>
                        <h5>Total Amount: ₦3,800</h5>
    
                        <div className="d-flex  gap-4">
                          <input
                            type="submit"
                            value="Success"
                            className="  px-sm-2 px-2 btn btn-sm border-0 generalColo rounded bg-info fw-bolder "
                          />
                          <input
                            type="submit"
                            value="Failed"
                            className="  px-sm-2 px-2  border-0 generalColo rounded bg-danger fw-bolder"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className=" border-bottom border-secondary pb-3">
                    <h3 className="mt-3">Mr Fortune</h3>
                    <div className="col-12 my-3  generalColor py-2 overFlow">
                      <div className="row row-gap-3 ">
                        <div className=" d-flex flex-nowrap align-items-center px-md-5">
                          <div className="col-3 mx-2">
                            <div className="CartImg-div">
                              <img src={image2} alt="" className=" rounded" />
                            </div>
                          </div>
    
                          <div className="col-11 col-md-6 d-flex justify-content-around align-items-center ms-4">
                            <p className="fw-bold flex-nowrap  pt-3">
                              Fried Rice and Chicken
                            </p>
                            <p className="fw-bold pt-3">₦2,900</p>
                          </div>
    
                          <div className="col-3 d-flex align-items-center justify-content-center mt-3">
                            <p className="fw-bold">Qty: 1</p>
                          </div>
                        </div>
    
                        <div className=" d-flex flex-nowrap align-items-center px-md-5">
                          <div className="col-3 mx-2">
                            <div className="CartImg-div">
                              <img src={image2} alt="" className=" rounded" />
                            </div>
                          </div>
    
                          <div className="col-11 col-md-6 d-flex justify-content-around align-items-center ms-4">
                            <p className="fw-bold flex-nowrap  pt-3">
                              Fried Rice and Chicken
                            </p>
                            <p className="fw-bold pt-3">₦2,900</p>
                          </div>
    
                          <div className="col-3 d-flex align-items-center justify-content-center mt-3">
                            <p className="fw-bold">Qty: 1</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-10 px-1">
                      <div className="">
                        <p>
                          <span className="fw-bolder">Special Request:</span> Lorem
                          ipsum dolor, sit amet consectetur adipisicing elit.
                          Nesciunt ipsa quam sint! Eveniet magnam dignissimos iure.
                        </p>
                      </div>
                      <div className=" w-100 align-items-center gap-5">
                        <div className="lh-1">
                          <p>
                            <span className="fw-bolder">Addr:</span>No. 3 Ave, off
                            Gov Road{" "}
                          </p>
                          <p>
                            <span className="fw-bolder">Phone:</span>07065734527
                          </p>
                        </div>
                        <h5>No. of items: 2</h5>
                        <h5>Total Amount: ₦3,800</h5>
    
                        <div className="d-flex  gap-4">
                          <input
                            type="submit"
                            value="Success"
                            className="  px-sm-2 px-2 btn btn-sm border-0 generalColo rounded bg-info fw-bolder "
                          />
                          <input
                            type="submit"
                            value="Failed"
                            className="  px-sm-2 px-2  border-0 generalColo rounded bg-danger fw-bolder"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
  )
}

export default Orders
