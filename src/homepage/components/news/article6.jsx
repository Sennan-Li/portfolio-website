import React from 'react'
import '../../scss/news.scss'
import * as articleConstants from '../../constants/constants'
import Heading from './common/heading'

import fig1 from './images/a6/figure6-1.png'
import fig2 from './images/a6/figure6-2.png'
import fig3 from './images/a6/figure6-3.png'
import fig4 from './images/a6/figure6-4.png'
import fig5 from './images/a6/figure6-5.png'
import fig6 from './images/a6/figure6-6.png'
import fig7 from './images/a6/figure6-7.png'
import fig8 from './images/a6/figure6-8.png'
import fig9 from './images/a6/figure6-9.png'
import fig10 from './images/a6/figure6-10.png'
import fig11 from './images/a6/figure6-11.png'
import fig12 from './images/a6/figure6-12.png'
import fig13 from './images/a6/figure6-13.png'
import fig14 from './images/a6/figure6-14.png'
import fig15 from './images/a6/figure6-15.png'

export default function Article6() {
  return (
    <div className='article'>
    <Heading articleTitle={articleConstants.articleTitle6} articleDate={articleConstants.articleDate6} articleLink="exp://exp.host/@sennan/home-care-app?release-channel=default"/>
    <h3>In order to view this app, you need to install "Expo Go" in your mobile phone from App Store or Google Play Store <a href="https://expo.dev/client">(https://expo.dev/client)</a>, after installation you can come back and click the project link above to view.</h3>
   
    <h2>Home Screen</h2>
    <p>The homepage is mainly composed of three parts: banner, function area, and recommendation area. The banner area is the theme picture of the App. The icon background of the ribbon is set off in bright colours, which is easy for elderly users to identify. The last section is the recommendation area. The recommendation area is mainly based on the items that the elderly often browse and like.</p>
    <figure className='screen'><img src={fig1} alt="" /></figure>
    <figure className='screen'><img src={fig2} alt="" /></figure>
    <p>Click the button in the function area to enter the secondary page. "Health Records" is mainly used to record the user's information, which is convenient for the elderly, children or other third parties to view. "Health Monitoring" is used to monitor basic daily health data and the physical condition of the elderly at all times. "Health Report" summarises and evaluates the user's records and monitoring conditions. Users can seek medical treatment in time according to abnormal indicators.</p>
    <figure className='screen'><img src={fig3} alt="" /></figure>
    <figure className='screen'><img src={fig4} alt="" /></figure>
    <p>"Family Doctor" is convenient for users to make online appointment, communicate and consult with doctors in real time, and secondly, record all the medical information of users.</p>
    <figure className='screen'><img src={fig5} alt="" /></figure>
    <figure className='screen'><img src={fig6} alt="" /></figure>
    <h2>Services Screen</h2>
    <p>The service modules mainly include 3 categories: cleaning, repairs, and shopping. The purpose of life service is to meet the living needs of the elderly at home. Figures below show the secondary functional areas of different services.</p>
    <figure className='screen'><img src={fig7} alt="" /></figure>
    <figure className='screen'><img src={fig8} alt="" /></figure>
    <figure className='screen'><img src={fig9} alt="" /></figure>
    <figure className='screen'><img src={fig10} alt="" /></figure>
    <h2>Information Screen</h2>
    <p>The "information page" mainly displays three major functional points: health guide, community activities, and local news. The interface design is mainly based on rounded corner card design, pictures and text coexist, and users can intuitively see the content displayed on the page. The "Guide" column is designed to popularise health knowledge for the elderly, such as: recipe recommendation, dental care, healthy exercise, etc. Click on the health knowledge page to enter the secondary page to view the specific content, according to the needs Browse the page or exit the page. Community events, local news interface also adopted the same designs.</p>
    <figure className='screen'><img src={fig11} alt="" /></figure>
    <figure className='screen'><img src={fig12} alt="" /></figure>

    <h2>Me screen</h2>
    <p>The icon on the "My" page is composed of brightly coloured linear icons, which are in sharp contrast with the previous page icon design, while still following the principle of fresh, simple and uncomplicated design. “My event” is primarily a community event for the News page, but also includes the Social Entertainment page. Personal postings or participation in other users' postings can be viewed in My Events. “My collection” mainly focuses on collecting health knowledge, because health knowledge will update the latest knowledge of the day every day, and users will collect useful information during browsing for easy viewing in the future.</p>
    <figure className='screen'><img src={fig13} alt="" /></figure>
    
    <h2>Call Screen</h2>
    <p>The "Call" button is placed in the centre of the bottom tab bar, and has two state designs, one is the red button in the unclicked state, and the other is the green button in the clicked state. When the elderly need help, the red button will turn green after it is successfully unlocked, and at the same time, it will pop up whether to make a call. This prevents inconvenience caused by misoperation.</p>
    <figure className='screen'><img src={fig14} alt="" /></figure>
    <figure className='screen'><img src={fig15} alt="" /></figure>
  </div>
  )
}
