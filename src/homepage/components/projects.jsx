
import React from 'react'
// import { Link } from 'react-router-dom';

//images
import woodenBeam from "../images/wooden_beam.png";
import headingBegin from "../images/heading_begin.png";
import headingEnd from "../images/heading_end.png";


import homecare from "../images/homecare.png";
import todo from "../images/todo.png";
import reactNative from "../images/react-native.png";
import react from "../images/react.png";
import notes from "../images/notes.png";
import web from "../images/web icon.jpeg"
import python from "../images/python.png";
import streamlit from "../images/streamlit.png";
import { MdWeb } from 'react-icons/md';
import { RxExternalLink } from 'react-icons/rx';

export default function Projects() {
    return (
        <section id='project'>
            <img src={woodenBeam} alt="" className='woodenBeam' />
            <div className='headingContainer'>
                <h4 className='heading'>My Projects</h4>
                <img className='headingBegin' src={headingBegin} alt=""/>
                <img className='headingEnd' src={headingEnd} alt=""/>
            </div>

            <div className='intro'>
                <p>
                    Welcome!<br /> <br/>
                    My name is Sennan Li. I’m a Service Digitalization Specialist at BYD Europe, where I manage technical information and dealer management systems, and provide user support. Previously, I was a Microsoft Support Engineer for Azure PostgreSQL customers. <br />
                    <br />
                    I hold dual Master’s degrees in Automotive Engineering and Computer Science. Through the Leadership Development Programme, I gained global skills and strategic insights. I enjoy working with diverse teams to solve real-world problems with new technologies. <br />
                    <br />
                    Let’s innovate and create impactful solutions together!
                </p>
            </div>

            <div className='projectCardSet'>
                <div className='projectCard project1'>

                    <div className='projectHeader'>
                        <img src={web} alt=""  />
                        <div>
                        <h4>Responsive Websites</h4>
                        <small>Built by HTML CSS/SCSS JS</small>
                        </div>
                    </div>

                    <div className='projectList'>
                        <a target='_blank' rel="noreferrer" href="/news/article1">
                            <div className='project'>
                                <MdWeb className='projectIcon'/>
                                <div className='projectName'>
                                    <p>Hometown <RxExternalLink/></p>
                                    <small>A responsive style website briefly introduces the geography and history of my hometown Shenzhen, along with travel tips and transportation options.</small>
                                    <hr />
                                </div>
                            </div>
                        </a>

                        <a target='_blank' rel="noreferrer" href="/news/article2">
                            <div className='project'>
                                <MdWeb className='projectIcon'/>
                                <div className='projectName'>
                                    <p>Notebook <RxExternalLink/></p>
                                    <small>This website is used to record the important knowledge points of the modules I have learned in university, and it is still being updated continuously.</small>
                                    <hr />
                              </div>
                          </div>
                        </a>

                        <a target='_blank' rel="noreferrer" href="/news/article3">
                            <div className='project'>
                                <MdWeb className='projectIcon'/>
                                <div className='projectName'>
                                    <p>E-shop <RxExternalLink/></p>
                                    <small>A responsive online sales website</small>
                                </div>
                            </div>
                        </a>
                </div>  
            </div>     

            <div className='projectCard project2'>
                <div className='projectIntro'>
                    <div className='projectHeader'>
                        <img src={react} alt=""  />
                        <div>
                        <h4>Web Apps</h4>
                        <small>Built by React.js</small>
                        </div>
                    </div>

                    <div className='projectList'>
                        <a target='_blank' rel="noreferrer" href="/news/article4">
                            <div className='project'>
                                <img src={notes} alt="" className='projectImg'/>
                                <div className='projectName'>
                                    <p>Notes <RxExternalLink/></p>
                                    <small>A clean and practical notes web app</small>
                                    <hr />
                                </div>
                            </div>
                        </a>

                        <a target='_blank' rel="noreferrer" href="/news/article5">
                            <div className='project'>
                                <img src={todo} alt="" className='projectImg'/>
                                <div className='projectName'>
                                    <p>Todo <RxExternalLink/></p>
                                    <small>A useful and clean todo list web app.</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className='projectCardSet'>
            <div className='projectCard project1'>
                <div className='projectHeader'>
                    <img src={reactNative} alt=""  />
                    <div>
                        <h4>Mobile Apps</h4>
                        <small>Built by React Native.js</small>
                    </div>
                </div>

                <div className='projectList'>
                    <a target='_blank' rel="noreferrer" href="/news/article6">
                        <div className='project'>
                            <img src={homecare} alt="" className='projectImg'/>
                            <div className='projectName'>
                                <p>Home Care <RxExternalLink/></p>
                                <small>This project identified the digital gap for the elderly, noting many unfriendly electronic products. After market analysis and surveys on home service needs, a home care mobile app was designed using service design principles.</small>                       
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className='projectCard project2'>
                <div className='projectHeader'>
                    <img src={python} alt=""  />
                    <div>
                        <h4>Python Web Apps</h4>
                        <small>Built by Python</small>
                    </div>
                </div>

                <div className='projectList'>
                    <a target='_blank' rel="noreferrer" href="/news/article7">
                        <div className='project'>
                            <img src={streamlit} alt="" className='projectImg'/>
                            <div className='projectName'>
                                <p>Todo <RxExternalLink/></p>
                                <small>The To-Do List App, developed using Streamlit, is designed to help users manage their tasks efficiently.</small>  
                                <hr />                     
                            </div>
                        </div>
                    </a>

                    <a target='_blank' rel="noreferrer" href="/news/article8">
                        <div className='project'>
                            <img src={streamlit} alt="" className='projectImg'/>
                            <div className='projectName'>
                                <p>Weather Forecast <RxExternalLink/></p>
                                <small>The Weather Forecast App is a web application built using the Python Streamlit framework and the OpenWeatherMap API.</small>                       
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>


            <img src={woodenBeam} alt="" className='woodenDivider'/>
        </section>
    )
}
