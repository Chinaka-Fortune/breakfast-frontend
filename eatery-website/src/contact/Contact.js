import React from "react";
import { useState } from "react";
import checfContactImg from "../images/33-336800_chef-hat-png-download-chef-cartoon-head-png.png";
const Contact = () => {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  const handleContactName = (e) =>{setContactName(e.target.value)}
  const handlecontactEmail = (e) =>{setContactEmail(e.target.value)}
  const handlecontactMessage = (e) =>{setContactMessage(e.target.value)}
  return (
    <div className="container-fluid pt-3">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-6">
          <img src={checfContactImg} alt="" className="img-fluid w-100 h-75 contactImage mb-md-3" style={{aspectRatio:6/5}} />
        </div>
        <div className="col-sm-6 mt-2 px-sm-5 mt-3">
          <h1 className="text-md-start text-center">Contact Us</h1>
          <h5 className="text-info ">
            Reach out to us and we will get back to you in no time.
          </h5>
          <form action="" className="d-flex flex-column gap-4 my-2 ">
            <input
              type="text"
              placeholder="Names"
              className="w-100 py-2 ps-3 pe-5 rounded-2 fw-bolder"
              value={contactName}
              onChange={handleContactName}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-100 py-2 ps-3 pe-5 rounded-2 fw-bolder"
              value={contactEmail}
              onChange={handlecontactEmail}
            />
            <textarea
              name=""
              id=""
              placeholder="your Message..."
              rows={6}
              className=" ps-3 rounded-2 fw-bolder"
              style={{ resize: "none" }}
              value={contactMessage}
              onChange={handlecontactMessage}
            ></textarea>
            <input
              type="submit"
              value="SEND"
              className="py-2 rounded-3 fw-bolder  bg-info border-0"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
