import React, { useState } from 'react'
import zainpic from '../image/zain.jpeg';
const About = () => {
  const [state]=useState(
    [
      {
        id:1,
        title:"name:",
        name:"Zain Ali"
      },
      {
        id:2,
        title:"E-mail:",
        name:"shkzainali54321@gmail.com"
      },
      {
        id:1,
        title:"Phone#:",
        name:"03071276956"
      },
      {
        id:1,
        title:"Address:",
        name:"kokia wala,chaki chonk"
      }
    ]
  )
  return (
    <div className='About'>
         <div className='container'>
            <div className='services-heading'>
            <div className='main-heading'><p>About</p></div>
            <div className='main-content'>
                
                <h2>full Stack developer with high accuracy of work</h2>
                <div className='servisec-footer'></div>
            </div>
            </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='about-header-img' >
                        <img src={zainpic} />
                    </div>
                    </div>
                    <div className='col-6'>
                        <div className='about-detail'>
                         <div>   <h1>hi dear</h1>
                        <p>full Stack developer with high accuracy of work</p>
                       
                        
                        <div className="about-info">
                            <div className="row">
                            {state.map(info=>(
                              <div className="col-6">
                                <h1>{info.title}</h1>
                                <p>{info.name}</p>
                              </div>
                               ))}
                            </div>
                          </div>
                        </div>
                        </div> 
                        
                    </div>
            </div>
    </div>
  )
}

export default About