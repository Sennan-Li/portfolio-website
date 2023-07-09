import React from 'react'
import '../../scss/news.scss'
import * as articleConstants from '../../constants/constants'
import Heading from '../news/common/heading'
import fig1 from './images/a2/newspaper.png'
export default function Article2() {
  return (
    <div className='article'>
      <Heading articleTitle={articleConstants.articleTitle2} articleDate={articleConstants.articleDate2} articleLink={articleConstants.articleLink2}/>
      <p>This is a relatively simple website, mainly used as a course notebook. As shown in the Figure 2-1, position relative and absolute are used to position the elements.</p>
      <figure><img src={fig1} alt=''></img><figcaption>Figure 2-1 Position</figcaption></figure>
     
    </div>
  )
}