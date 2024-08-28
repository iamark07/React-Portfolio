import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";




function Social_Media() {
  return (
    <div className='social_icon_container mb-5'>
        <ul className='flex gap-3'>
            <li><a href="#" className='w-10 md:w-12 h-10 md:h-12 rounded-full border border-solid border-blue-500 transition-all duration-300 hover:bg-transparent bg-blue-500 flex items-center justify-center text-lg md:text-xl'><FaLinkedinIn color='white'/></a></li>
            <li><a href="#" className='w-10 md:w-12 h-10 md:h-12 rounded-full border border-solid border-blue-500 transition-all duration-300 hover:bg-transparent bg-blue-500 flex items-center justify-center text-lg md:text-xl'><RiFacebookFill  color='white'/></a></li>
            <li><a href="#" className='w-10 md:w-12 h-10 md:h-12 rounded-full border border-solid border-blue-500 transition-all duration-300 hover:bg-transparent bg-blue-500 flex items-center justify-center text-lg md:text-xl'><FaInstagram  color='white'/></a></li>
            <li><a href="#" className='w-10 md:w-12 h-10 md:h-12 rounded-full border border-solid border-blue-500 transition-all duration-300 hover:bg-transparent bg-blue-500 flex items-center justify-center text-lg md:text-xl'><FaTwitter  color='white'/></a></li>
        </ul>
    </div>
  )
}

export default Social_Media