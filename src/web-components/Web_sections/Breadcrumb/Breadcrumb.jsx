import React from 'react'
import { Link } from 'react-router-dom';

function Breadcrumb(props) {
  return (
    <section className='breadcrumb_section p-14 bg-gradient-to-l from-indigo-950 to-teal-950'>
        <ul className='flex justify-center'>
            <li><Link to={props.link} className='text-gray-400'>Home</Link></li>
            <span className='mx-2 text-white'>/</span> 
            <li className='text-white'>{props.breadcrumb_name}</li>
        </ul>
    </section>
  )
}

export default Breadcrumb 