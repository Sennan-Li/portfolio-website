import React from 'react'
import '../../../scss/news.scss'

export default function Heading(props) {
  return (
    <div className='heading'>
        <h1>{props.articleTitle}</h1>
        <div className='sign'>
            <p className='name'>Sennan Li 李森楠</p>
        </div>
        <small>Project link: <a target='_blank' rel="noreferrer" href={props.articleLink}>{props.articleLink}</a></small>
    </div>
  )
}
