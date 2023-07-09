import React from 'react'
import '../../scss/news.scss'
import * as articleConstants from '../../constants/constants'
import Heading from './common/heading'
import fig1 from './images/a1/video-tag.mp4'
import fig2 from './images/a1/grid-system.png'
import fig3 from './images/a1/flexbox.png'

export default function Article5() {
  return (
    <div className='article'>
      <Heading articleTitle={articleConstants.articleTitle5} articleDate={articleConstants.articleDate5} articleLink={articleConstants.articleLink5}/>
      <p>This project is developed based on react. Data processing uses a lot of filter functions, and UI changes mainly use conditional rendering, such as task selection, deletion, and deletion history, as well as task completion, classification, and search. Editing of tasks and lists uses react state to update the edited content.</p>
    </div>
  )
}
