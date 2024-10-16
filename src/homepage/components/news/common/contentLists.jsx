import React from 'react'
import '../../../scss/news.scss'

//images
import hometown from '../../../images/hometown.jpg'
import notebook from '../../../images/notebook.jpg'
import eCommerce from '../../../images/e-commerce.jpg'
import notes from '../../../images/notes-app.png'
import todo from '../../../images/todo-app.png'
import homecare from '../../../images/homecare.png'
import streamlit from '../../../images/streamlit.png'
import * as articleConstants from '../../../constants/constants'

export default function ContentLists() {
  return (
    <div className='content'>
    <h1>Recent Articles</h1>
    <hr />

    <a href="/news/article8">
        <div className='chapters'>
            <img src={streamlit} alt="" />
            <div>
                <p className='intro'>{articleConstants.articleTitle8}</p>
                <p className='date'> {articleConstants.articleLink8}</p>
            </div>
        </div>
    </a><hr />



    <a href="/news/article7">
        <div className='chapters'>
            <img src={streamlit} alt="" />
            <div>
                <p className='intro'>{articleConstants.articleTitle7}</p>
                <p className='date'>{articleConstants.articleLink7}</p>
            </div>
        </div>
    </a><hr />

    <a href="/news/article6">
        <div className='chapters'>
            <img src={homecare} alt="" />
            <div>
                <p className='intro'>{articleConstants.articleTitle6}</p>

            </div>
        </div>
    </a><hr />

    <a href="/news/article5">
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
