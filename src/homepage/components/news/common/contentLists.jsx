import React from 'react'
import '../../../scss/news.scss'

//images
import hometown from '../../../images/hometown.png'
import notebook from '../../../images/notebook.png'
import eCommerce from '../../../images/e-commerce.png'
import notes from '../../../images/notes-app.png'
import todo from '../../../images/todo-app.png'
import homecare from '../../../images/homecare.png'
import * as articleConstants from '../../../constants/constants'

export default function ContentLists() {
  return (
    <div className='content'>
    <h1>Recent Articles</h1>
    <hr />

    <a href="/news">
        <div className='chapters'>
            <img src={homecare} alt="" />
            <div>
                <p className='intro'>{articleConstants.articleTitleLatest}</p>
                <p className='date'>exp://exp.host/@sennan/home-care-app?release-channel=default</p>
            </div>
        </div>
    </a><hr />

    <a href="/news/article4">
        <div className='chapters'>
            <img src={todo} alt="" />
            <div>
                <p className='intro'>{articleConstants.articleTitle5}</p>
                <p className='date'>{articleConstants.articleLink5}</p>
            </div>
        </div>
    </a><hr />

    <a href="/news/article4">
        <div className='chapters'>
            <img src={notes} alt="" />
            <div>
                <p className='intro'>{articleConstants.articleTitle4}</p>
                <p className='date'>{articleConstants.articleLink4}</p>
            </div>
        </div>
    </a><hr />

    <a href="/news/article3">
        <div className='chapters'>
            <img src={eCommerce} alt="" />
            <div>
                <p className='intro'>{articleConstants.articleTitle3}</p>
                <p className='date'>{articleConstants.articleLink3}</p>
            </div>
        </div>
    </a><hr />

    <a href="/news/article2">
        <div className='chapters'>
            <img src={notebook} alt="" />
            <div>
                <p className='intro'>{articleConstants.articleTitle2}</p>
                <p className='date'>{articleConstants.articleLink2}</p>
            </div>
        </div>
    </a><hr />

    <a href="/news/article1">
        <div className='chapters'>
            <img src={hometown} alt="" />
            <div>
                <p className='intro'>{articleConstants.articleTitle1}</p>
                <p className='date'>{articleConstants.articleLink1}</p>
            </div>
        </div>
    </a><hr />


</div>
  )
}
