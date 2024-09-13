import React from 'react'
import Section_title from "../Section_title/Section_title";
import Section_title_desc from "../Section_title_desc/Section_title_desc";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import Skill_languages from './Skill_languages/Skill_languages';

function Skill_section() {

    const prog_lang = [
        {
            lang_icon : <IoLogoHtml5 className='text-red-500 text-8xl md:text-9xl'/>,
            lang_name : "HTML"
        },
        {
            lang_icon : <FaCss3Alt className='text-blue-500 text-8xl md:text-9xl'/>,
            lang_name : "CSS"
        },
        {
            lang_icon : <TbBrandJavascript className='text-yellow-500 text-8xl md:text-9xl'/>,
            lang_name : "JS"
        },
        {
            lang_icon : <RiTailwindCssFill className='text-blue-500 text-8xl md:text-9xl'/>,
            lang_name : "TAILWIND CSS"
        },
        {
            lang_icon : <FaBootstrap className='text-purple-700 text-8xl md:text-9xl'/>,
            lang_name : "BOOTSTRAP"
        },
        {
            lang_icon : <DiJqueryLogo className='text-green-500 text-8xl md:text-9xl'/>,
            lang_name : "JQUERY"
        },
        {
            lang_icon : <FaReact className='text-blue-500 text-8xl md:text-9xl'/>,
            lang_name : "REACT"
        },
    ]

  return (
    <section className='skill_section mt-10 p-5 md:p-8 bg-gradient-to-l from-indigo-950 to-teal-950'>
        <Section_title title= {"Skills"}/>
        <Section_title_desc title_desc= {"My Frontend Skills"}/>
        <div className="skills_container flex flex-wrap flex-col md:flex-row justify-center gap-8 md:gap-32 mt-10 pb-20">
            {prog_lang.map((lang, index) => (
                <Skill_languages 
                key = {index}
                lang_icon = {lang.lang_icon}
                lang_name = {lang.lang_name}
                />
            ))}
        </div>
    </section>
  )
}

export default Skill_section