import React from 'react'
import '../scss/news.scss'
import NavBar from '../components/navBar'
import ContentLists from '../components/news/common/contentLists'
import Footer from '../components/footer'
import {useParams} from 'react-router-dom'
import ProjectDropdown from '../components/projectDropdown';
import ContactDropdown from '../components/contactDropdown';
import Latest from '../components/news/latest'
import Article1 from '../components/news/article1'
import Article2 from '../components/news/article2'
import Article3 from '../components/news/article3'
import Article4 from '../components/news/article4'
import Article5 from '../components/news/article5'

export default function News(props) {
  let {id} = useParams()
  return (
    <>
        <section className='news' onClick={props.onDropdownClose}>
          <div className='main'>
          {id==='latest'&& <Latest/>}
          {id==='article1'&& <Article1 />}
          {id==='article2'&& <Article2 />}
          {id==='article3'&& <Article3 />}
          {id==='article4'&& <Article4 />}
          {id==='article5'&& <Article5 />}
          </div>

          <ContentLists />
        </section>

        <Footer en='/news' cn='/news_cn' onClick={props.onDropdownClose}/>
    </>
  )
}
