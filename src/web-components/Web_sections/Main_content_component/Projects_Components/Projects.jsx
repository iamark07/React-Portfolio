import React from "react";
import { IoAddCircle } from "react-icons/io5";
import Projects_detail_btn from "./Projects_detail_btn_component/Projects_detail_btn";

function Projects_Components({
  pro_img,
  pro_title,
  pro_detail,
  onClick,
  on_img_Click,
}) {
  return (
    <div className="projects_wrapper group p-3 rounded-md bg-slate-200 w-full md:max-w-1/2 lg:max-w-1/3 xl:min-w-96 cursor-pointer" data-aos="fade-up">
      <figure className="relative overflow-hidden">
        <img src={pro_img} alt={pro_title} className="w-full group-hover:scale-110 transition-all duration-500"/>
        <figcaption className="absolute top-0 left-0 bg-[rgba(0,0,0,0.8)] opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-500 group-hover:pointer-events-auto flex justify-center items-center w-full h-full">
          <IoAddCircle
            color="white"
            size={"50px"}
            cursor={"pointer"}
            onClick={on_img_Click}
          />{" "}
          {/* Handle click */}
        </figcaption>
      </figure>
      <div className="project_title_container flex justify-between mt-5 items-center pe-2">
        <div className="project_title w-4/5">
          <h2 className="text-2xl md:text-3xl w-full text-blue-500 text-ellipsis text-nowrap overflow-hidden">
            {pro_title}
          </h2>
          <h3 className="text-md md:text-xl mt-1 inline-block">{pro_detail}</h3>
        </div>
        <Projects_detail_btn className="w-1/5" onClick={onClick} />{" "}
        {/* Handle click */}
      </div>
    </div>
  );
}

export default Projects_Components;
