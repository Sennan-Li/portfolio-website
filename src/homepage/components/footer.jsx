import React from 'react'
//import { Link } from 'react-router-dom';
import engraveLeftHead from "../images/engrave_left_head.png";
import engraveLeftTail from "../images/engrave_left_tail.png";
import engraveRightHead from "../images/engrave_right_head.png";
import engraveRightTail from "../images/engrave_right_tail.png";
import logo from "../images/logo(white).gif"

export default function Footer(props) {
  return (
    <footer onClick={props.onDropdownClose}>

      <div className='footerEngrave footerEngraveleft'>
        <img className='engrave engraveBegin' src={engraveLeftHead} alt=""/>
        <img className='engrave engraveEnd' src={engraveLeftTail} alt=""/>
      </div>
      
      <div className='footerContent'>
      <img src={logo} alt="" className='logoMove'/>
        <p className='footerText'>2024 Sennan Li 李森楠</p>
      
       
      </div>
   
      <div className='footerEngrave footerEngraveRight'>
        <img className='engrave engraveBegin' src={engraveRightTail} alt=""/>
        <img className='engrave engraveEnd' src={engraveRightHead} alt=""/>
      </div>
    </footer>
  )
}
