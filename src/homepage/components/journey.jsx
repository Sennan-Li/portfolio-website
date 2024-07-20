import React, {useState} from 'react'

//images
import notebookBg from "../images/bg_notebook.png";
import notebookCover from "../images/cover_notebook.png";
import notepage1 from "../images/notepage1.png";
import notepage2 from "../images/notepage2.png";
import notepage3 from "../images/notepage3.png";
import notepage4 from '../images/Sennan Li - CV.jpg'


const html = document.querySelector("html")

export default function Journey() {
    const [uniPage1Classes,setUniPage1Classes] = useState('uniPage1 uniPage hide')
    const [uniPage2Classes,setUniPage2Classes] = useState('uniPage2 uniPage hide')
    const [uniPage3Classes,setUniPage3Classes] = useState('uniPage3 uniPage hide')
    const [uniPage4Classes,setUniPage4Classes] = useState('uniPage4 uniPage hide')
    const [notebookOverlayClasses,setNotebookOverlayClasses] = useState('notebookOverlay hide')
  return (
    
    <section id='journey'>
    <h1>Sennan's Journal</h1>
    <div className='notebook'>
      <img src={notebookBg} alt="" className='notebookBg'/>
      <img onClick={openUniPage1} src={notepage1} alt="" className='notePage1 notePage'/>
      <img onClick={openUniPage2} src={notepage2} alt="" className='notePage2 notePage'/>
      <img onClick={openUniPage3} src={notepage3} alt="" className='notePage3 notePage'/>
      <img onClick={openUniPage4} src={notepage4} alt="" className='notePage4 notePage'/>
      <img src={notebookCover} alt="" className='notebookCover'/>
    </div>
    
    <div onClick={closeUniPage} className={notebookOverlayClasses}></div>
    <img onClick={closeUniPage} src={notepage1} alt="" className={uniPage1Classes}/>
    <img onClick={closeUniPage} src={notepage2} alt="" className={uniPage2Classes}/>
    <img onClick={closeUniPage} src={notepage3} alt="" className={uniPage3Classes}/>
    <img onClick={closeUniPage} src={notepage4} alt="" className={uniPage4Classes}/>

   
  </section>
  )
  function openUniPage1() {
    setUniPage1Classes('uniPage1 uniPage unhide')
    setUniPage2Classes('uniPage2 uniPage hide')
    setUniPage3Classes('uniPage3 uniPage hide')
    setUniPage4Classes('uniPage4 uniPage hide')
    setNotebookOverlayClasses('notebookOverlay unhide')
    html.classList.contains("noScroll")? html.classList.remove("noScroll"): html.classList.add("noScroll");
  }
  function openUniPage2() {
    setUniPage1Classes('uniPage1 uniPage hide')
    setUniPage2Classes('uniPage2 uniPage unhide')
    setUniPage3Classes('uniPage3 uniPage hide')
    setUniPage4Classes('uniPage4 uniPage hide')
    setNotebookOverlayClasses('notebookOverlay unhide')
    html.classList.contains("noScroll")? html.classList.remove("noScroll"): html.classList.add("noScroll");
  }
  function openUniPage3() {
    setUniPage1Classes('uniPage1 uniPage hide')
    setUniPage2Classes('uniPage2 uniPage hide')
    setUniPage3Classes('uniPage3 uniPage unhide')
    setUniPage4Classes('uniPage4 uniPage hide')
    setNotebookOverlayClasses('notebookOverlay unhide')
    html.classList.contains("noScroll")? html.classList.remove("noScroll"): html.classList.add("noScroll");
  }
  function openUniPage4() {
    setUniPage1Classes('uniPage1 uniPage hide')
    setUniPage2Classes('uniPage2 uniPage hide')
    setUniPage3Classes('uniPage3 uniPage hide')
    setUniPage4Classes('uniPage4 uniPage unhide')
    setNotebookOverlayClasses('notebookOverlay unhide')
    html.classList.contains("noScroll")? html.classList.remove("noScroll"): html.classList.add("noScroll");
  }
  function closeUniPage() {
    setUniPage1Classes('uniPage1 uniPage hide')
    setUniPage2Classes('uniPage2 uniPage hide')
    setUniPage3Classes('uniPage3 uniPage hide')
    setUniPage4Classes('uniPage4 uniPage hide')
    setNotebookOverlayClasses('notebookOverlay hide')
    html.classList.contains("noScroll")? html.classList.remove("noScroll"): html.classList.add("noScroll");
  }
}

