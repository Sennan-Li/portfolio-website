import React from 'react'
import '../scss/homepage.scss';
import { Helmet } from 'react-helmet';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Journey from '../components/journey';
import Footer from '../components/footer';





export default function Homepage(props) {

  return (
    <div>
      <section onClick={props.onDropdownClose}>
      <Hero />
      <Projects/>
      <Journey/>
      <Footer en='/homepage' cn='/homepage_cn'/>
      </section>
    </div>
  );
}

