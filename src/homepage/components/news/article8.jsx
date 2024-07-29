import React from 'react'
import '../../scss/news.scss'
import * as articleConstants from '../../constants/constants'
import Heading from './common/heading'


import fig1 from './images/a8/figure8-1.png'
import fig2 from './images/a8/figure8-2.png'

export default function Article8() {
  return (
    <div className='article'>
      <Heading articleTitle={articleConstants.articleTitle8} articleDate={articleConstants.articleDate8} articleLink={articleConstants.articleLink8}/>
      <h2>Learning Objectives</h2>
      <p>The Weather Forecast App is a web application built using the Python Streamlit framework and the OpenWeatherMap API. It provides users with real-time weather data and forecasts for any city worldwide.
      </p>
      <h2>Project Overview</h2>
      <p><strong>Real-Time Data:</strong> Users can access current weather conditions and temperature.</p>
      <p> <strong>5-Day Forecast: </strong>The app provides a detailed 5-day weather forecast</p>
      <figure><img src={fig1} alt="" /><figcaption>Figure 8-1 Temperatures</figcaption></figure>
      <figure><img src={fig2} alt="" /><figcaption>Figure 8-2 Conditions</figcaption></figure>
      <h2>Conclusion</h2>
      <p>Gained hands-on experience with Streamlit, a powerful tool for creating interactive web applications with Python. Learned how to integrate and fetch data from the OpenWeatherMap API, enhancing skills in handling external APIs.</p>
    </div>
  )
}
