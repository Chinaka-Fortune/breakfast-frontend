import React from 'react'
import { useEffect } from 'react';
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./DashBoard.css";
import "../component/GeneralStyles.css";
import "../cart/Cart.css";
const Message = () => {

  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
  }, []);

  return (
    <div className="container-fluid mt-5 d-non">
            <div className="row ">
              <h4 className="text-center fw-bolder text-muted ourLandinAnimate2">
                Inbox
              </h4>

              <div className="tableSection">
                <table class="table ">
                  <thead className="">
                    <tr>
                      <th className="nameTh">Name</th>
                      <th>Message</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="text-nowrap">benedict olorunwafemi</td>
                      <td
                        className="  d-flex align-items-center cursorStyle text-center"
                        data-bs-toggle="popover"
                        data-bs-placement="bottom"
                        data-bs-custom-class="custom-popover"
                        data-bs-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum similique dolorum commodi, molestias consequuntur neque animi id nam eaque sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corporis unde repellendus quam. Recusandae modi illo qui voluptate ex quo?"
                      >
                        <h6 className=" text-nowrap text-truncate">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Harum similique dolorum commodi, molestias
                          consequuntur neque animi id nam eaque sint. Lorem
                          ipsum dolor sit amet consectetur adipisicing elit.
                          Autem corporis unde repellendus quam. Recusandae modi
                          illo qui voluptate ex quo?
                        </h6>
                      </td>
                      <td>benidzy,bi@gmail.com.ngkkhdsjdkejjkj</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

  )
}

export default Message
