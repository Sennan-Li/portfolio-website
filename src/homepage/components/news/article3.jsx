import React from 'react'
import '../../scss/news.scss'
import * as articleConstants from '../../constants/constants'
import Heading from '../news/common/heading'
import fig1 from './images/a3/a3.mp4'
export default function Article3() {
  return (
    <div className='article'>
      <Heading articleTitle={articleConstants.articleTitle3} articleDate={articleConstants.articleDate3} articleLink={articleConstants.articleLink3}/>
      <p>In this project, I mainly learned about window sliding and data selection. As shown in Figure 3-1, when switching between different themes, the window will slide accordingly, and the data on the page will also change accordingly.</p>
      <figure><video src={fig1} autoPlay muted playsInline loop></video><figcaption>Figure 3-1 Sliding and data selection</figcaption></figure>
    </div>
  )
}
