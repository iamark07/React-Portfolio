import React from 'react';
import Header from './Web_sections/Header';
import Hero_section from './Web_sections/Hero_section';
import Main_content from './Web_sections/Main_content';
import Footer from './Web_sections/Footer';
import Go_to_top_btn from './Web_sections/Go_to_top_btn/Go_to_top_btn';


function Background() {
  return (
    <div className="page_bg w-100 bg-gradient-to-l from-indigo-950 to-black">
        <Header />
        <Hero_section/>
        <Main_content />
        <Footer/>
        <Go_to_top_btn/>
    </div>
  )
}

export default Background;