import React from 'react';
import Header from './Web_sections/Header';
import Hero_section from './Web_sections/Hero_section';
import Main_content from './Web_sections/Main_content';


function Background() {
  return (
    <div className="page_bg w-100">
        <Header />
        <Hero_section/>
        <Main_content />
    </div>
  )
}

export default Background;