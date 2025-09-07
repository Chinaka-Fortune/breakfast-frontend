import React from 'react'
import '../component/GeneralStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faUtensils, faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons'
const Service = () => {
  return (
    <div className='container-xxl py-5'>
      <div className="container">
        <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay='0.1s'>
                <div className="service-item rounded p-3">
                    <div className="p-4">
                        <FontAwesomeIcon icon={faUserTie} className='text-info fw-bolder fs-3'/>
                        <h5 className='fw-bolder'>Master Chefs </h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, ad.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp">
                <div className="service-item pt-3">
                    <div className="p-4">
                        <FontAwesomeIcon icon={faUtensils} className='text-info fw-bolder fs-3'/>
                         <h5 className='fw-bolder'>Quality Chefs </h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, ad.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp">
                <div className="service-item pt-3">
                    <div className="p-4">
                        <FontAwesomeIcon icon={faCartPlus} className='text-info fw-bolder fs-3'/>
                         <h5 className='fw-bolder'>Online Order </h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, ad.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp">
                <div className="service-item pt-3">
                    <div className="p-4">
                        <FontAwesomeIcon icon={faHeadset} className='text-info fw-bolder fs-3'/>
                         <h5 className='fw-bolder'>24/7 Services </h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, ad.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
