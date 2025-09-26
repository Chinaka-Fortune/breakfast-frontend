import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faUtensils, faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer className='container-fluid px-lg-5 pt-lg-5 pt-4'>
      <div className='row px-lg-3 pt-lg-4 pb-lg-3'>
        <div className='col-lg-3'>
          <h3 className='text-white mb-4'>We serve you all your Naija Breakfast cravings.</h3>
          <NavLink to='/book_a_table' className='py-2 px-4 text-white rounded text-decoration-none fw-bold generalBtn bg-info'>Book A Table</NavLink>

          <figure className='footerimg rounded mt-5'>
            {/* <img src={navLogoImg}></img> */}
          </figure>
        </div>

        <div className='col-lg-5'>
          
          <div className='d-flex'>
            <div className='col'>
            <ul className='footerUl1'>
              <h5 className='mb-4 text-white fw-bold'>Organization</h5>
              <li className='mb-2'><NavLink to='/about' className="text-decoration-none text-white">About Us</NavLink></li>
              <li className='mb-2'><NavLink to='/contact' className="text-decoration-none text-white">Contact Us</NavLink></li>
              <li><NavLink className="text-decoration-none text-white" to='/ourInclusive'>Our Menu</NavLink></li>
            </ul>
          </div>
          <div className='col'>
             <ul className='footerUl1'>
              <h5 className='mb-4 text-white fw-bold'>Services</h5>
              <li className='mb-2'><NavLink to='/media' className="text-decoration-none text-white"><FontAwesomeIcon icon={faUserTie} className='text-info fw-bolder fs-5'/>  Master Chefs</NavLink></li>
              <li className='mb-2'><NavLink to='/policies' className="text-decoration-none text-white"><FontAwesomeIcon icon={faUtensils} className='text-info fw-bolder fs-5'/>  Quality chefs</NavLink></li>
              <li className='mb-2'><NavLink to='/f.a.qs' className="text-decoration-none text-white"><FontAwesomeIcon icon={faCartPlus} className='text-info fw-bolder fs-5'/>  Online Orders</NavLink ></li>
              <li className='mb-2'><NavLink to='/f.a.qs' className="text-decoration-none text-white"><FontAwesomeIcon icon={faHeadset} className='text-info fw-bolder fs-5'/>  24/7 Services </NavLink ></li>
              
            </ul>
          </div>
          </div>
        </div>
        <div className='col-lg-4'>
           <ul className='footerUl1'>
              <h5 className='mb-4 text-white fw-bold'>Contacts</h5>
              <li className='mb-2 d-flex'><i class="bi bi-envelope me-2 text-white fw-bolder"></i><NavLink to='/info@senideaenableall.org' className="text-decoration-none text-white">Naijabreakfastplace@gmail.com</NavLink></li>

              <li className='mb-2'><i class="bi bi-telephone-fill text-white me-2"></i><NavLink to='/tel:+234 703 611 7648' className="text-decoration-none text-white"> 0703 611 7648</NavLink ></li>

              <li className='mb-2 d-flex'><i class="bi bi-geo-alt-fill me-2 text-white"></i><NavLink to='/Plot 12, Unity Close, Off Adewale Street, Ikeja, Lagos, Nigeria' className="text-decoration-none text-white">Sobo Bustop, 152 Akowonjo Rd, Akowonjo, opposite Firstbank, Alimosho, Lagos 100001, Lagos
</NavLink></li>

              <li className='mb-2 d-flex'><i class="bi bi-facebook text-white me-2"></i><NavLink to='/SenideaEnableAll' className="text-decoration-none text-white">Naijabreakfastplace </NavLink ></li>

              <li className='mb-2 d-flex'><i class="bi bi-instagram text-white me-2"></i><NavLink to='/senideaenableall' className="text-decoration-none text-white">naijabreakfastplace</NavLink ></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
