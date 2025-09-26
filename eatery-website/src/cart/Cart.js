import React from "react";
import { useState } from "react";
import tapioka from "../images/launch1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
const Cart = () => {
  const [specialRequest, setSpecialRequest] = useState("");
  const handlespecialRequest = (e) => setSpecialRequest(e.target.value);

  return (
    <div className="container-fluid container-xl">
      <div className="row px-2 px-md-4 rounded">
        <h3 className="mt-2 fw-bold">Your Choice</h3>
        <div className="col-12 my-3  generalColor py-2 ">
          <div className="row">
            <div className="overFlow d-flex flex-nowra align-items-center justify-content-evenly px-md-">
              <div className="col-2 ">
                <div className="CartImg-div ">
                  <img src={tapioka} alt="" className=" rounded" />
                </div>
              </div>

              <div className="col-12 col-md-6 d-flex justify-content-around align-items-center ms-5 ms-md-0">
                <p className="fw-bold flex-nowrap  pt-3">
                  Fried Rice and Chicken
                </p>
                <p className="fw-bold pt-3">₦2,900</p>
              </div>

              <div className="col-2 qtyInput me-5 me-md-0">
                <input type="number" className="ps-1" />
              </div>

              <div className="col-2 d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  className="p-2 rounded-circle border-inf border-0 generalColor"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="fw-bolder fs-5 trash"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-between align-items-center my-3 px-md-4">
        <form className="col-sm-9 col-lg-4">
          <textarea
            name=""
            id=""
            placeholder="special Request (Optional)..."
            className="rounded-2 p-3 textAreaPost"
            style={{ resize: "none" }}
            value={specialRequest}
            onChange={handlespecialRequest}
          ></textarea>
        </form>
        <div className="col-12 d-flex justify-content-between">
          <div className="">
            <h5>No. of items: 1</h5>
            <h5>Total Amount: ₦2,900</h5>
          </div>
          <div className="">
            <input
              type="submit"
              value="Pay"
              className="w-100 py-2 px-sm-5 px-4 py-sm-3 border-0 generalColor rounded bg-info fw-bolder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
