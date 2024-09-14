import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Projects_full_img({ img_Visible, img_Close, project }) {
  return (
    <div
      className={`project_full_img_container z-50 fixed top-0 left-0 p-5 md:p-8 backdrop-blur-md items-center bg-[rgba(0,0,0,.5)] w-full justify-center ${
        img_Visible ? "flex" : "hidden"
      }`} style={{ height: "100dvh" }}
    >
      <img
        src={project?.pro_img}
        className="h-48 sm:h-80 md:h-96 lg:h-full w-full lg:w-4/5"
        alt={project?.pro_title}
      />
      <IoIosCloseCircleOutline
        onClick={img_Close}
        className="text-white absolute top-20 lg:top-5 cursor-pointer right-5 lg:right-12 text-3xl"
      />
    </div>
  );
}

export default Projects_full_img;
