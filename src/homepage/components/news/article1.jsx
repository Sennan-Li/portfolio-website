import React from 'react'
import '../../scss/news.scss'
import * as articleConstants from '../../constants/constants'
import Heading from '../news/common/heading'
import fig1 from './images/a1/video-tag.mp4'
import fig2 from './images/a1/grid-system.png'
import fig3 from './images/a1/flexbox.png'

export default function Article1() {
  return (
    <div className='article'>
      <Heading articleTitle={articleConstants.articleTitle1} articleDate={articleConstants.articleDate1} articleLink={articleConstants.articleLink1}/>
      <p>This is my first web project, mainly using html, css/scss, javascript. Although it is a react-based development environment, it only uses components to avoid code duplication.</p>
      <p>Through this project, I learned video, img tag in html and grid system, flex box and position in css.</p>
      <p>As shown in Figure 1-1, the video tag is used as the background of Jumbotron, and the text and video use position relative and absolute.</p>
      <figure><video src={fig1} autoPlay muted playsInline loop></video><figcaption>Figure 1-1 Video tag and postion</figcaption></figure>
      <p>As shown in Figure 1-2, the image is used as the background in the grid system.</p>
      <figure><img src={fig2} alt="" /><figcaption>Figure 1-2 Grid system</figcaption></figure>
      <p>As shown in Figure 1-3, the position of img and text uses flexbox.</p>
      <figure><img src={fig3} alt="" /><figcaption>Figure 1-3 Flexbox</figcaption></figure>
    </div>
  )
}
