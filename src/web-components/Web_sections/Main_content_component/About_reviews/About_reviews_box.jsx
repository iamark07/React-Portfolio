import React from 'react'
// import Section_list from '../Section_List/Section_list'

function About_reviews_box(props) {
  return (
    <div className='about_review_box w-36 md:w-44 h-32 bg-gray-700 backdrop-blur-xl bg-opacity-50 border border-solid border-gray-500 rounded-md flex justify-center items-center flex-col px-3 py-5'>
      <h2 className='text-blue-400 text-center text-2xl'>{props.time}</h2>
      <h3 className='text-white text-center'>{props.review}</h3>
    </div>
  )
}

export default About_reviews_box