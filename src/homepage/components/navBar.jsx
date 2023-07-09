import '../scss/nav.scss'
import React, {useState} from 'react';
import logo from "../images/sennanli-logo.png";
import { CgMenuGridO } from 'react-icons/cg';
import { RiContactsLine } from 'react-icons/ri';
import ProjectDropdown from './projectDropdown';
import ContactDropdown from './contactDropdown';

export default function NavBar({projectDropdown, setProjectDropdown, contactDropdown, setContactDropdown}) {

  function handleProjectDropdownOpen() {
    setContactDropdown(false)
    {projectDropdown===false?setProjectDropdown(true):setProjectDropdown(false)}
  }
  function handleContactDropdownOpen() {
    setProjectDropdown(false)
    {contactDropdown===false?setContactDropdown(true):setContactDropdown(false)}
  }

  return (
    <header>
      <nav>
        <div id='navLeft'>
          <a href="/homepage" ><img className='logo' src={logo} alt=""/></a>
          <h1>Sennan's Portfolio</h1>
        </div>

        <div id="navRight">
          <button onClick={handleProjectDropdownOpen}><CgMenuGridO className={projectDropdown===false?'navMenu':'openNavMenu navMenu'}/></button>
          <button onClick={handleContactDropdownOpen}><RiContactsLine className={contactDropdown===false?'navContact':'openNavContact navContact'}/></button>
        </div>
      </nav>
      {projectDropdown&&<ProjectDropdown/>}
      {contactDropdown&&<ContactDropdown/>}
    </header>
  )
} 
