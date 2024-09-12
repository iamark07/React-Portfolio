import React, { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Projects_detail.css";

function Projects_detail({ project, onClose, isVisible }) {
  // Disable body scroll when the project detail modal is open
  useEffect(() => {
    if (isVisible) {
      // Prevent scrolling on the background
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup: Re-enable scroll when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  return (
    <div
      className={`Projects_detail_container fixed top-0 left-0 p-5 md:p-8 backdrop-blur-md items-center bg-[rgba(0,0,0,.5)] h-full w-full justify-center ${
        isVisible ? "flex" : "hidden"
      }`}
    >
      <div className="projects_detail_wrapper bg-white grid grid-cols-7 gap-5 h-full max-h-full overflow-y-auto">
        <div className="project_img col-span-7 lg:col-span-4 h-full">
          <img src={project?.pro_img} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="projects_detail_items col-span-7 lg:col-span-3 py-5 lg:pe-5 lg:ps-0 relative">
          <h2 className="text-xl ps-5 lg:ps-0 lg:text-3xl text-blue-500 text-ellipsis text-nowrap overflow-hidden pb-3 w-4/5">
            {project?.pro_title}
          </h2>
          <IoIosCloseCircleOutline
            onClick={onClose}
            className="text-black absolute top-5 cursor-pointer right-5 text-2xl transition-all duration-300 hover:text-red-500"
          />
          <div className="border-t border-solid border-gray-400 project_desc px-5 lg:px-0 overflow-y-auto max-h-[70vh]">
            <p className="mt-3 text-sm lg:text-lg">{project?.description}</p>
            <div className="website_detail flex gap-5 mt-5">
              <ul className="flex gap-2 flex-col">
                <li className="text-sm md:text-lg font-medium">Type:</li>
                <li className="text-sm md:text-lg font-medium">Languages:</li>
                <li className="text-sm md:text-lg font-medium">Country:</li>
                <li className="text-sm md:text-lg font-medium">Live URL:</li>
              </ul>
              <ul className="flex gap-2 flex-col">
                <li className="text-sm md:text-lg font-medium text-gray-500">
                  {project?.type}
                </li>
                <li className="text-sm md:text-lg font-medium text-gray-500">
                  {project?.languages}
                </li>
                <li className="text-sm md:text-lg font-medium text-gray-500">
                  {project?.country}
                </li>
                <li className="text-sm md:text-lg font-medium text-gray-500">
                  {project?.live_url}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects_detail;
