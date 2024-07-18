import React from 'react'

import jumbotron from '../images/logo-c.mp4'



export default function Hero() {
  return (
      <section id='hero'>
      {/* <img src={bg} alt="" className='bg'/> */}
        {/* <img src={myName} alt="" className='nameLogo' /> */}
        <video autoPlay muted playsInline className='bgV'>
        <source src={jumbotron} type='video/mp4'/>
      </video>
    </section>
    
  )
}
