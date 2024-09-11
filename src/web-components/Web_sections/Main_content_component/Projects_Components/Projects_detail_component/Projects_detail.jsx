import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Projects_detail({ project, onClose, isVisible }) {
  // Ensure the detail is hidden when isVisible is false
  return (
    <div
      className={`Projects_detail_container fixed top-0 left-0 p-8 backdrop-blur-md items-center bg-[rgba(0,0,0,.5)] h-screen w-full justify-center ${
        isVisible ? "flex" : "hidden"
      }`}
    >
      <div className="projects_detail_wrapper bg-white grid grid-cols-7 gap-5 h-full">
        <div className="project_img col-span-4 h-full">
          <img src={project?.pro_img} className="h-full object-cover" alt="" />
        </div>
        <div className="projects_detail_items col-span-3 py-5 pe-5 relative">
          <h2 className="text-3xl border-b text-blue-500 border-solid border-gray-400 pb-3">
            {project?.pro_title}
          </h2>
          <IoIosCloseCircleOutline
            onClick={onClose}
            className="text-black absolute top-5 cursor-pointer right-5 text-2xl transition-all duration-300 hover:text-red-500"
          />
          <p className="mt-3 text-lg">{project?.description}</p>
          <div className="website_detail flex gap-5 mt-5">
            <ul className="flex gap-2 flex-col">
              <li className="text-lg font-medium">Type:</li>
              <li className="text-lg font-medium">Languages:</li>
              <li className="text-lg font-medium">Country:</li>
              <li className="text-lg font-medium">Live URL:</li>
            </ul>
            <ul className="flex gap-2 flex-col">
              <li className="text-lg font-medium text-gray-500">
                {project?.type}
              </li>
              <li className="text-lg font-medium text-gray-500">
                {project?.languages}
              </li>
              <li className="text-lg font-medium text-gray-500">
                {project?.country}
              </li>
              <li className="text-lg font-medium text-gray-500">
                {project?.live_url}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects_detail;
