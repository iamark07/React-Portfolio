import React from 'react'
import Blog_section from '../Web_sections/Main_content_component/Blog_section'
import Breadcrumb from '../Web_sections/Breadcrumb/Breadcrumb'

function Blog_page() {
  return(
    <>
      <Breadcrumb breadcrumb_name={"Blog"} link="/" />
      <Blog_section/>
    </>
  )
}

export default Blog_page