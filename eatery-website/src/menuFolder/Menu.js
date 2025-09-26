import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import tapioka from '../images/launch1.webp'
import './Menu.css'
import '../component/GeneralStyles.css'
const Menu = () => {
  return (
    
    <div className="container-fluid my-3 px- d">
      <div className="row general-width mx-auto">
      <div className='d-flex justify-content-between  flex-wrap RowGapMenu'>
        <div className=" d-flex flex-column generalColor rounded p-2 theSizes">
          <div className="img-div mx-auto">
            <img src={tapioka} alt="" className=' rounded'/>
          </div>
          <div className="content">
            <p className='fw-bold text-muted'>Fried Rice and Chicken</p>
            <div className='d-flex justify-content-between mt-n1'>
              <p>price: ₦2,900</p>
              <span  className='cursorStyle glowBorder'><FontAwesomeIcon icon={faCartPlus} className='rounded-circle border p-2 d-flex align-items-center' /></span>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-column generalColor rounded p-2 theSizes">
          <div className="img-div mx-auto">
            <img src={tapioka} alt="" className=' rounded'/>
          </div>
          <div className="content">
            <p className='fw-bold text-muted'>Fried Rice and Chicken</p>
            <div className='d-flex justify-content-between mt-n1'>
              <p>price: ₦2,900</p>
              <span  className='cursorStyle glowBorder'><FontAwesomeIcon icon={faCartPlus} className='rounded-circle border p-2 d-flex align-items-center' /></span>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-column generalColor rounded p-2 theSizes">
          <div className="img-div mx-auto">
            <img src={tapioka} alt="" className=' rounded'/>
          </div>
          <div className="content">
            <p className='fw-bold text-muted'>Fried Rice and Chicken</p>
            <div className='d-flex justify-content-between mt-n1'>
              <p>price: ₦2,900</p>
              <span  className='cursorStyle glowBorder'><FontAwesomeIcon icon={faCartPlus} className='rounded-circle border p-2 d-flex align-items-center' /></span>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-column generalColor rounded p-2 theSizes">
          <div className="img-div mx-auto">
            <img src={tapioka} alt="" className=' rounded'/>
          </div>
          <div className="content">
            <p className='fw-bold text-muted'>Fried Rice and Chicken</p>
            <div className='d-flex justify-content-between mt-n1'>
              <p>price: ₦2,900</p>
              <span  className='cursorStyle glowBorder'><FontAwesomeIcon icon={faCartPlus} className='rounded-circle border p-2 d-flex align-items-center' /></span>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-column generalColor rounded p-2 theSizes">
          <div className="img-div mx-auto">
            <img src={tapioka} alt="" className=' rounded'/>
          </div>
          <div className="content">
            <p className='fw-bold text-muted'>Fried Rice and Chicken</p>
            <div className='d-flex justify-content-between mt-n1'>
              <p>price: ₦2,900</p>
              <span  className='cursorStyle glowBorder'><FontAwesomeIcon icon={faCartPlus} className='rounded-circle border p-2 d-flex align-items-center' /></span>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-column generalColor rounded p-2 theSizes">
          <div className="img-div mx-auto">
            <img src={tapioka} alt="" className=' rounded'/>
          </div>
          <div className="content">
            <p className='fw-bold text-muted'>Fried Rice and Chicken</p>
            <div className='d-flex justify-content-between mt-n1'>
              <p>price: ₦2,900</p>
              <span  className='cursorStyle glowBorder'><FontAwesomeIcon icon={faCartPlus} className='rounded-circle border p-2 d-flex align-items-center' /></span>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
    </div>
  )
}

export default Menu
