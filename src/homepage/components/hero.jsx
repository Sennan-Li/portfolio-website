import React from 'react'

//images
import myName from "../images/sennanli-name(black).png";
import bg from "../images/scholomance_parallax_middle.png";



export default function Hero() {
  return (
    <div>
      <section id='hero'>
      <img src={bg} alt="" className='bg'/>
        <img src={myName} alt="" className='nameLogo' />
        <p className='intro'>Hi, I am Sennan Li, a student studying MSc Computer Science at University of York. Plain and Simple, I love Web Development, I am passionate about building clean and useful websites.</p>
      
    </section>
    </div>
  )
}
