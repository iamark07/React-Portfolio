import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Web_sections/Header';
import Hero_section from './Web_sections/Hero_section';
import Main_content from './Web_sections/Main_content';
import Footer from './Web_sections/Footer';
import Go_to_top_btn from './Web_sections/Go_to_top_btn/Go_to_top_btn';
import Contact_page from './Web_pages/Contact_page';
import About_page from './Web_pages/About_page';
import Blog_page from './Web_pages/Blog_page';

function Background() {
  return (
    <Router>
      <div className="page_bg w-100 bg-gradient-to-l from-indigo-950 to-black">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero_section />
              <Main_content/>
            </>
          } />
          <Route path="/Contact" element={<Contact_page />} />
          <Route path="/About" element={<About_page />} />
          <Route path="/Blog" element={<Blog_page />} />
        </Routes>
        {/* <Main_content /> */}
        <Footer />
        <Go_to_top_btn />
      </div>
    </Router>
  );
}

export default Background;
