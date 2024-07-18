import React from 'react'
import '../../scss/news.scss'
import * as articleConstants from '../../constants/constants'
import Heading from '../news/common/heading'
export default function Article4() {
  return (
    <div className='article'>
      <Heading articleTitle={articleConstants.articleTitle4} articleDate={articleConstants.articleDate4} articleLink={articleConstants.articleLink4}/>
      <h2>Learning Objectives</h2>
      <p>The Notes web app aims to create a user-friendly platform for organizing and managing personal notes. The primary objective is to provide a seamless experience for users to create, edit, and categorize their notes efficiently. You can explore the project here: https://notes.sennanli.com
      </p>
      <h2>Project Overview</h2>
      <p>The project scope included developing a web-based application with features such as note creation, editing, categorization, and search functionality.</p>
      <h2>Conclusion</h2>
      <p>Overall, the Notes Project has been a valuable learning experience, allowing me to apply and expand my technical skills.</p>
    </div>
  )
}
