import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

function Projects_detail(props) {
  return (
    <div className="Projects_detail_container hidden fixed top-0 left-0 p-8 backdrop-blur-md items-center bg-[rgba(0,0,0,.5)] h-screen w-full justify-center">
        <div className="projects_detail_wrapper bg-white grid grid-cols-7 gap-5 h-full">
            <div className="project_img col-span-4 h-full">
                <img src="src/assets/img/projects-img/restuarent-website.png" className='h-full object-cover' alt="" />
            </div>
            <div className="projects_detail_items col-span-3 py-5 pe-5 relative">
                <h2 className='text-3xl border-b border-solid border-gray-400 pb-3'>Restuarent Website</h2>
                <IoIosCloseCircleOutline className='text-black absolute top-5 cursor-pointer right-5 text-2xl'/>
                <p className='mt-3 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia facere ullam, repellendus culpa cumque doloremque nesciunt, deleniti vero laborum quas error explicabo cum consequuntur molestiae quo. Qui, cupiditate perspiciatis vel consequatur laudantium dolorum! Harum rerum, vel aspernatur quasi fugit similique cupiditate ipsam esse dicta sunt saepe, quam dolorem culpa ducimus?</p>
                <div className="website_detail flex gap-5 mt-5">
                    <ul className='flex gap-2 flex-col'>
                        <li className='text-lg font-medium'>Type:</li>
                        <li className='text-lg font-medium'>Langages:</li>
                        <li className='text-lg font-medium'>Country:</li>
                        <li className='text-lg font-medium'>Live URL:</li>
                    </ul>
                    <ul className='flex gap-2 flex-col'>
                        <li className='text-lg font-medium text-gray-500'>Frontend Website</li>
                        <li className='text-lg font-medium text-gray-500'>HTML, CSS, JS</li>
                        <li className='text-lg font-medium text-gray-500'>India</li>
                        <li className='text-lg font-medium text-gray-500'>www.example.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects_detail