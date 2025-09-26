import React from 'react'
import './DashBoard.css'
import '../component/GeneralStyles.css'
const LandingDashboard = () => {
  return (
    <div>
       <div className="d-non">
            <div className="cards">
              <div className="card d-flex justify-content-betweeen">
                <div className="card-contents">
                  <div className="numbers">1271</div>
                  <div className="card-name">Order</div>
                </div>
                <div className="icon-box">
                  <i class="bi bi-bag-check-fill"></i>
                </div>
              </div>
              <div className="card">
                <div className="card-contents">
                  <div className="numbers">54</div>
                  <div className="card-name">Message</div>
                </div>
                <div className="icon-box">
                  <i class="bi bi-envelope-at"></i>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default LandingDashboard
