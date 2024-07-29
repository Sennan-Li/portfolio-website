import React from 'react'
import '../scss/news.scss'

import ContentLists from '../components/news/common/contentLists'
import Footer from '../components/footer'
import {useParams} from 'react-router-dom'


import Article1 from '../components/news/article1'
import Article2 from '../components/news/article2'
import Article3 from '../components/news/article3'
import Article4 from '../components/news/article4'
import Article5 from '../components/news/article5'
import Article6 from '../components/news/article6'
import Article7 from '../components/news/article7'
import Article8 from '../components/news/article8'

export default function News(props) {
  let {id} = useParams()
  return (
    <>
        <section className='news' onClick={props.onDropdownClose}>
          <div className='main'>
          {id==='article1'&& <Article1 />}
          {id==='article2'&& <Article2 />}
          {id==='article3'&& <Article3 />}
          {id==='article4'&& <Article4 />}
          {id==='article5'&& <Article5 />}
          {id==='article6'&& <Article6 />}
          {id==='article7'&& <Article7 />}
          {id==='article8'&& <Article8 />}

          </div>

          <ContentLists />
        </section>

        <Footer en='/news' cn='/news_cn' onClick={props.onDropdownClose}/>
    </>
  )
}
