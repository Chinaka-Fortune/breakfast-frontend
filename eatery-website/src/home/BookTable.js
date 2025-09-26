import React, { useState } from "react";
import MealVideo from "../videos/We are back, bigger and better. Taste the freshness in every of our meal, from the fire to your .mp4";
import './Home.css'
import '../component/GeneralStyles.css'


const BookTable = () => {
  const [yourName, setYourName] = useState('')
  const [yourEmail, setYourEmail] = useState('')
  const [yourDateAndTime, setyourDateAndTime] = useState('')
  const [yourOptions, setyourOptions] = useState('')
  const [yourMessage, setyourMessage] = useState('')
  const [submitBtn, setSubmitBtn] = useState()

  const handleYourName = (e) =>{ setYourName(e.target.value)}
  const handleyourEmail = (e) =>{ setYourEmail(e.target.value)}
  const handleyourDateAndTime = (e) =>{ setyourDateAndTime(e.target.value)}
  const handleyourOptions = (e) =>{ setyourOptions(e.target.value)}
  const handleyourMessage = (e) =>{ setyourMessage(e.target.value)}
  const handleSubmitBtn = (e) =>{ setSubmitBtn(e.preventDefault())}

  return (
    <>
    <div className="container-fluid py-5 px-0 wow fadeInUp " >
      <div className="row g-0 d-flex align-items-center">
        <div className="col-md-6 bg-danger vw">
          
            <video src={MealVideo} autoPlay loop muted></video>
        </div>
        <div className="col-md-6 bg-dark align-items-center">
          <div className="p-5">
            <h5 className="section-title ff-secondary text-start text-info ourLandinAnimate2">
              Reservation
            </h5>
            <h3 className="text-white mb-4 ourLandinAnimate2">Book A Table Online</h3>

            <form action="">
              <div className="row g-3 ourImpactAnimate">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder=""
                      value={yourName} onChange={handleYourName}
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder=""
                      value={yourEmail} onChange={handleyourEmail}
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating date" id="date3">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Date & Time"
                      data-bs-target="#date3"
                      data-bs-toggle="datetimepicker"
                      itemId="datetime"
                      value={yourDateAndTime} onChange={handleyourDateAndTime}
                    />
                    <label htmlFor="email">Date & Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-select" id="select1" value={yourOptions} onChange={handleyourOptions}>
                      <option value="0">None</option>
                      <option value="1">people 1</option>
                      <option value="2">people 2</option>
                      <option value="3">people 3</option>
                    </select>
                    <label htmlFor="select1">No of People</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      name=""
                      id="message"
                      className="ps-3 pt-2"
                      placeholder="Special Request"
                      value={yourMessage} onChange={handleyourMessage}
                      style={{ resize: "none", height:7 + 'rem', width:100 + '%' }}
                    ></textarea>
                   
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-info  py-3 w-100"
                  onClick={handleSubmitBtn}>
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    </> 
  );
};

export default BookTable;
