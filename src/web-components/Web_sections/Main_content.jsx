import React from 'react';
import About_section from './Main_content_component/About_section';
import Projects_section from './Main_content_component/Projects_section';
import Experience_section from './Main_content_component/Experience_section';

function Main_content() {

  return (
    <>
      <About_section/>
      <Projects_section/>
      <Experience_section/>
    </>
  )
}

export default Main_content