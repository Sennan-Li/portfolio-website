import React from 'react'
import '../../scss/news.scss'
import * as articleConstants from '../../constants/constants'
import Heading from './common/heading'


export default function Article5() {
  return (
    <div className='article'>
      <Heading articleTitle={articleConstants.articleTitle5} articleDate={articleConstants.articleDate5} articleLink={articleConstants.articleLink5}/>
      <h2>Learning Objectives</h2>
      <p>The ToDo web app aims to create a user-friendly platform for managing tasks and to-do lists efficiently. The primary objective is to provide users with a seamless experience for organizing their tasks, setting priorities, and tracking progress. You can explore the project here: https://todo.sennanli.com
      </p>
      <h2>Project Overview</h2>
      <p>The project scope included developing a web-based application with features such as task creation, editing, prioritization, and progress tracking.</p>
      <h2>Conclusion</h2>
      <p>This project enhanced my skills in web development, particularly in using modern frameworks and libraries. Additionally, I aimed to improve my understanding of user experience design. These objectives were important to me as they align with my career goals and personal interests in creating impactful digital solutions.</p>
    </div>
  )
}
