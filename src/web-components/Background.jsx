import React from 'react';
import Header from './Contents/Header';
import Hero_section from './Contents/Hero_section';
import Main_content from './Contents/Main_content';

function Background() {
  return (
    <div className="page_bg w-100">
        <Header />
        <Hero_section/>
        <Main_content/>
    </div>
  )
}

export default Background;