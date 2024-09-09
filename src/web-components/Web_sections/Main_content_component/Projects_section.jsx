import React from 'react'
import Section_list from '../Section_List/Section_list'
import Projects_Components from './Projects_Components/Projects'
import { IoIosCloseCircleOutline } from "react-icons/io";
import Projects_detail from './Projects_Components/Projects_detaial_component/Projects_detail';

function Projects_section() {
  return (
    <section className='Projects_section py-20 px-5 md:px-10 w-100 bg-gradient-to-l from-indigo-950 to-teal-950'>
        <Section_list title = {"My Projects"}/>
        <h2 className='text-neutral-300 text-2xl md:text-4xl mt-5 md:mt-7'>Recent Projects</h2>
        <div className="projects_container mt-10 flex gap-5 justify-center">
            <Projects_Components 
                pro_img = {"src/assets/img/projects-img/restuarent-website.png"}
                pro_title ={"Restuarent Website"}
                pro_detail = {"Frontend Website"}
            />
            <Projects_Components 
                pro_img = {"src/assets/img/projects-img/Watch-e-commerce.png"}
                pro_title ={"Watch E-Commerce Website"}
                pro_detail = {"Frontend Website"}
            />
            <Projects_Components 
                pro_img = {"src/assets/img/projects-img/Portfolio-website.png"}
                pro_title ={"Portfolio Website"}
                pro_detail = {"Frontend Website"}
            />



        </div>
            <div className="project_full_img fixed top-0 left-0 p-8 backdrop-blur-md items-center bg-[rgba(0,0,0,.5)] h-screen w-full hidden justify-center">
                <img src="src/assets/img/projects-img/restuarent-website.png" className='w-4/5 h-full' alt="" />
                <IoIosCloseCircleOutline className='text-white absolute top-8 right-20 cursor-pointer text-2xl'/>
            </div>

            <Projects_detail/>
    </section>
  )
}

export default Projects_section