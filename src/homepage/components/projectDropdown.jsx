import React from 'react'
import dropdownHook from "../images/dropdown_hook.png"
import homecare from "../images/homecare.png";
import todo from "../images/todo.png";
import notes from "../images/notes.png";
import hometown from "../images/hometown.jpg"
import notebook from "../images/notebook.jpg"
import eCommerce from "../images/e-commerce.jpg"
import '../scss/dropdown.scss'


export default function ProjectDropdown() {
  return (
    <div className="projectDropdown dropdown">
    <img src={dropdownHook} alt="" className="dropdownHookLeft" />
    <img src={dropdownHook} alt="" className="dropdownHookRight" />
    <h4>Websites</h4>
    <div className="projectDropdownIcons web">
    <a target='_blank' rel="noreferrer" href="https://hometown.sennanli.com">
        <div>
         <img src={hometown} alt="" className='webImg'/>
          <small>Hometown</small>
        </div>
      </a>
      <a target='_blank' rel="noreferrer" href="https://notebook.sennanli.com">
        <div>
         <img src={notebook} alt="" className='webImg'/>
          <small>Notebook</small>
        </div>
      </a>
      <a target='_blank' rel="noreferrer" href="https://store.sennanli.com">
        <div>
        <img src={eCommerce} alt="" className='webImg'/>
          <small>E-shop</small>
        </div>
      </a>
      
    </div>

    <h4>Web Apps</h4>
    <div className="projectDropdownIcons">
      <a target='_blank' rel="noreferrer" href="https://notes.sennanli.com">
        <div>
          <img src={notes} alt="" />
          <small>Notes</small>
        </div>
      </a>
      <a target='_blank' rel="noreferrer" href="https://todo.sennanli.com">
        <div>
          <img src={todo} alt="" />
          <small>To Do</small>
        </div>
      </a>
    </div>

    <h4>Mobile Apps</h4>
    <div className="projectDropdownIcons">
      <a target='_blank' rel="noreferrer" href="https://sennanli.com/news">
        <div>
          <img src={homecare} alt="" />
          <small>Home Care</small>
        </div>
      </a>
      
    </div>

  </div>
  )
}
