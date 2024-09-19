import React from 'react'

function Blog_card(props) {
  return (
    <div className="group blog_card_container bg-gradient-to-l from-indigo-950 to-teal-900 pb-5" data-aos="fade-left">
        <figure className='overflow-hidden'>
            <img src={props.blog_img} alt="" className='object-cover w-full h-56 group-hover:scale-110 transition-all duration-500'/>
        </figure>
        <h2 className='text-2xl mt-5 px-5 text-blue-500'>{props.blog_title}</h2>
        <p className='mt-2 px-5 text-white'>{props.blog_desc}</p>
    </div>
  )
}

export default Blog_card