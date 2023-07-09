import React from 'react'
//import { Link } from 'react-router-dom';
import engraveLeftHead from "../images/engrave_left_head.png";
import engraveLeftTail from "../images/engrave_left_tail.png";
import engraveRightHead from "../images/engrave_right_head.png";
import engraveRightTail from "../images/engrave_right_tail.png";
import iconFrame from "../images/icon_frame.png";
import uk from "../images/uk.png"
import china from "../images/china.png"

export default function Footer(props) {
  return (
    <footer onClick={props.onDropdownClose}>

      <div className='footerEngrave footerEngraveleft'>
        <img className='engrave engraveBegin' src={engraveLeftHead} alt=""/>
        <img className='engrave engraveEnd' src={engraveLeftTail} alt=""/>
      </div>
      
      <div className='footerContent'>
        <p className='languageSwitch'>Switch Language</p>
        <p className='footerText'>2022 Sennan Li 李森楠</p>
        <img src={iconFrame} alt="" className='flagLeft flagFrame'/>
        <img src={iconFrame} alt="" className='flagRight flagFrame'/>
        <a href={props.en}><img src={uk} alt="" className='flagLeft countryFlag'/></a>
        <a href={props.cn}><img src={china} alt="" className='flagRight countryFlag'/></a>
      </div>
   
      <div className='footerEngrave footerEngraveRight'>
        <img className='engrave engraveBegin' src={engraveRightTail} alt=""/>
        <img className='engrave engraveEnd' src={engraveRightHead} alt=""/>
      </div>
    </footer>
  )
}
