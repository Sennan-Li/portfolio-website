import React from 'react'
import '../../scss/news.scss'
import * as articleConstants from '../../constants/constants'
import Heading from '../news/common/heading'
export default function Article4() {
  return (
    <div className='article'>
      <Heading articleTitle={articleConstants.articleTitle4} articleDate={articleConstants.articleDate4} articleLink={articleConstants.articleLink4}/>
      <p>This project is developed based on react, and a large number of filter functions are used for data processing, while conditional rendering is mainly used for UI changes, such as note selection, deletion, recovery and deletion history, as well as note collection, classification, and search. Editing of notes and folders uses react state to update the edited content.</p>
    </div>
  )
}
