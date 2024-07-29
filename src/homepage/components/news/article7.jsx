import React from 'react'
import '../../scss/news.scss'
import * as articleConstants from '../../constants/constants'
import Heading from './common/heading'

import fig1 from './images/a7/figure7-1.png'


export default function Article7() {
  return (
    <div className='article'>
      <Heading articleTitle={articleConstants.articleTitle7} articleDate={articleConstants.articleDate7} articleLink={articleConstants.articleLink7}/>
      <h2>Learning Objectives</h2>
      <p>The To-Do List App, developed using Streamlit, is designed to help users manage their tasks efficiently. The app allows users to add and complete tasks, providing a simple and intuitive interface for task management.
      </p>
      <h2>Project Overview</h2>
      <p><strong>Task Management:</strong> Users can add new tasks, mark them as completed.</p>
      <p> <strong>Real-time Updates: </strong>Changes to the task list are reflected in real-time.</p>
      <figure><img src={fig1} alt="" /><figcaption>Figure 7-1 Todo list</figcaption></figure>
      <h2>Conclusion</h2>
      <p>Gained hands-on experience with Streamlit, understanding its capabilities and limitations for building web applications. Enhanced Python programming skills, particularly in the context of web development and real-time data handling.</p>
    </div>
  )
}
