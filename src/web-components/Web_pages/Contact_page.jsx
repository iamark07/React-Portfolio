import React from 'react'
import Header from '../Web_sections/Header'
import Contact_section from '../Web_sections/Main_content_component/Contact_section'
import Footer from '../Web_sections/Footer'
import Breadcrumb from '../Web_sections/Breadcrumb/Breadcrumb'

function Contact_page() {
  return (
    <>
        {/* <Header /> */}
        <Breadcrumb breadcrumb_name={"Contact"} link="/" />
        <Contact_section/>
        {/* <Footer/> */}
    </>
  )
}

export default Contact_page