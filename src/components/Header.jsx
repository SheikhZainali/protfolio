import React, { useState } from 'react'
// import {AiFillAlert} from "react-icons/ai"
import zainpic from '../image/zain.jpeg';

import {FaFacebook,FaWhatsapp,FaInstagramSquare,FaTelegramPlane} from "react-icons/fa"

const Header = () => {
  const [state]=useState({
    name:"I am Zain Ali",
    detail:"I am full stack developer",
    image:zainpic

  })
  return (
    <div className='header'>
     <div className='container'>
        <div className='row'>
       
       <div className='col-6'>
       <div className='header-content'>
                <div className='header-section'>
                <ul className='header-ul'>
                    <li><FaFacebook/></li>
                    <li><FaWhatsapp/></li>
                    <li><FaInstagramSquare/></li>
                    
                </ul> 
                <h1>{state.name}</h1>
                <p>{state.detail}</p>
                <div className='Header-button'>
                  <button className='btn'><FaTelegramPlane/></button>
                </div>
               </div>
               
                </div>
                
              
               
       </div>
       <div className='col-6'>
        <div className='header-img'>
        <img src={state.image}></img>
        </div>
       </div>
        </div>
        </div>   
    </div>
  )
}

export default Header;