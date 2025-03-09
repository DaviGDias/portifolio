'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section6 from './Section6/Section6'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Contato from './Contato/contato'



const Home = () => {

  useEffect(()=>{
    const initAOS = async() =>{
      await import("aos")
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement: 'bottom-bottom',
      })
    }
    initAOS();
  },[])

  return (
    <div id='home' className='overflow-hidden scroll-smooth '>
      <Hero />
      <About />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section6 />
      <Contato />
    </div>
  )
}

export default Home
