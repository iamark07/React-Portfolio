import React from 'react'
import { IoAddCircle } from "react-icons/io5";
import Projects_detail_btn from './Projects_detail_btn_component/Projects_detail_btn';

function Projects_Components(props) {
  return (
    <div className="projects_wrapper p-3 rounded-md bg-slate-200 w-96">
        <figure className='relative group'>
            <img src={props.pro_img} alt="" />
            <figcaption className="absolute top-0 left-0 bg-[rgba(0,0,0,0.8)] opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-500 group-hover:pointer-events-auto flex justify-center items-center w-full h-full">
                <IoAddCircle color="white" size={"50px"} cursor={"pointer"}/>
            </figcaption>
        </figure>
        <div className="project_title_container flex justify-between mt-5 items-center pe-2">
            <div className="project_title w-4/5">
                <h2 className='text-3xl w-full text-ellipsis text-nowrap overflow-hidden'>{props.pro_title}</h2>
                <h3 className='text-xl mt-1 inline-block'>{props.pro_detail}</h3>
            </div>
            <Projects_detail_btn className="w-1/5"/>
        </div>
    </div>
  )
}

export default Projects_Components