import React, { useState } from 'react'
import {FaFacebook,FaWhatsapp,FaInstagramSquare,FaTelegramPlane} from "react-icons/fa"

const Services = () => {
    const [state]=useState([
    {
        id:1,
        // serviceIcon:"FaFacebook",
        servicename:"face book clone",
        servicedetail:"server people with clone facebook web"

    },
    {
        id:2,
        // serviceIcon:"Text Utility web",
        servicename:"Text Utility web",
        servicedetail:"server people with Text Utility web"

    },
    {
        id:3,
        // serviceIcon:"FaInstagramSquare",
        servicename:"Recipe search web",
        servicedetail:"server people with Recipe search web"

    },
    {
        id:3,
        // serviceIcon:"FaInstagramSquare",
        servicename:"Tic Toc Toi",
        servicedetail:"server people with Tic Toc Toi"

    },
    {
        id:4,
        // serviceIcon:"FaFacebook",
        servicename:"Calculator",
        servicedetail:"server people with calculator web"

    },
    {
        id:5,
        // serviceIcon:"FaInstagramSquare",
        servicename:"Car run game",
        servicedetail:"server people with car run game"

    },
    {
        id:5,
        // serviceIcon:"FaInstagramSquare",
        servicename:"Quiz app",
        servicedetail:"server people with Quiz app"

    },
    {
        id:5,
        // serviceIcon:"FaInstagramSquare",
        servicename:"Stop watch",
        servicedetail:"server people with Stop watch"

    },
    {
        id:6,
        // serviceicon:"FaTelegramPlane",
        servicename:"TODO web",
        servicedetail:"server people with Todo web"

    },
])
  return (
    <div className='Services'>
        <div className='container'>
            <div className='services-heading'>
            <div className='main-heading'><p>Services</p></div>
            <div className='main-content'>
                <h1>Services</h1>
                <h2>most commen website</h2>
                <h2>,Facebook</h2>
                <h2>tictoctoe</h2>
                <div className='servisec-footer'></div>
            </div>
            </div>
            <div className='row'>
               {state.map((info)=>(
                 <div className='col-4' >
                 <div className='service-box'>
                    {/* <FaFacebook className='service-box-icone'/> */}
                    <div className='service-box-heading'>{info.servicename}</div>
                 <div className='service-box-content'>{info.servicedetail}</div>
                 </div>
                 
             </div>))}
               
            </div>
        </div>
    </div>
  )
}

export default Services