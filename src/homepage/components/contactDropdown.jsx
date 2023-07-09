import React from 'react'
import '../scss/dropdown.scss'
import dropdownHook from "../images/dropdown_hook.png"
import { MdEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';

export default function ContactDropdown() {
  return (
    <div className="contactDropdown dropdown">
    <img src={dropdownHook} alt="" className="dropdownHookLeft" />
    <img src={dropdownHook} alt="" className="dropdownHookRight" />
    <h4>Contacts</h4>
    <div className="contactDropdownIcons">
    <a target='_blank' rel="noreferrer" href="">
        <div>
          <MdEmail className='contactDropdownIcon'/>
          <small>sennanli@alumni.york.ac.uk</small>
        </div>
      </a>
      <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/sennan-li" >
        <div>
         <CiLinkedin className='contactDropdownIcon'/>
          <small>linkedin.com/in/sennan-li</small>
        </div>
      </a>
    </div>


  </div>
  )
}
