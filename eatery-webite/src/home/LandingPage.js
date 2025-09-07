import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import '../component/GeneralStyles.css'
import potImage from '../images/jollof-rice-with-fried-banana-plate-rice-with-tomatoes-onions-spices-traditional-national-nigerian-food-dark-background_209484-10813.jpg'
const LandingPage = () => {
  return (
   <div className="container-xxl bg-dark hero-header mb-4 py-5">
    <div className="container py-y my-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-3 text-white Animated sliderInLeft">Enjoy Our <br />Delicious Meal</h1>
          <p className='text-white Animated sliderInLeft mb-4 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing. ipsum, dolor sit amet consectetur adipisicing elit. Dolore, pariatur harum </p>

          <NavLink className='btn btn-info py-sm-3 px-sm-5 sliderInLeft fw-bolder fs-5'>Book a Table</NavLink>
        </div>
        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
          <img src={potImage} alt="" className='img-fluid rounded-circle' width='490px'/>
        </div>
      </div>
    </div>
   </div>
  )
}

export default LandingPage
