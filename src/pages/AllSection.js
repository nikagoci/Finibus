import React from 'react'
import AboutUs from './AboutUs'
import Blog from './Blog'
import Description from './Description'
import Header from './Header'
import NewsLetter from './NewsLetter'
import Portfolio from './Portfolio'
import ProjectTalk from './ProjectTalk'
import Services from './Services'
import Testimonial from './Testimonial'

const AllSection = () => {
  return (
    <>
        <Header />
        <Services />
        <AboutUs />
        <NewsLetter />
        <Portfolio />
        <Description />
        <Testimonial />
        <Blog />
        <ProjectTalk />
    </>
  )
}

export default AllSection