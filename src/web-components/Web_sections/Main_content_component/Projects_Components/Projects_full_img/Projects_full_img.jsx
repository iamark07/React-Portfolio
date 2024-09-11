import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Projects_full_img({ img_Visible, img_Close, project }) {
  return (
    <div
      className={`project_full_img_container fixed top-0 left-0 p-8 backdrop-blur-md items-center bg-[rgba(0,0,0,.5)] h-screen w-full justify-center ${
        img_Visible ? "flex" : "hidden"
      }`}
    >
      <img
        src={project?.pro_img}
        className="h-full w-4/5"
        alt={project?.pro_title}
      />
      <IoIosCloseCircleOutline
        onClick={img_Close}
        className="text-white absolute top-5 cursor-pointer right-12 text-3xl"
      />
    </div>
  );
}

export default Projects_full_img;
