import React from 'react'
import Header from '../Web_sections/Header'
import About_section from '../Web_sections/Main_content_component/About_section'
import Footer from '../Web_sections/Footer'
import Experience_section from '../Web_sections/Main_content_component/Experience_section'
import Projects_section from '../Web_sections/Main_content_component/Projects_section'
import Skill_section from '../Web_sections/Main_content_component/Skill_section'

function About_page() {
  return (
    <>
        <Header/>
        <About_section/>
        <Projects_section/>
        <Experience_section/>
        <Skill_section/>
        <Footer/>
    </>
  )
}

export default About_page