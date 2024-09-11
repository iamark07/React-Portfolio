import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";

function Projects_detail_btn({ onClick }) {
  return (
    <IoArrowForwardCircle
      className="text-blue-500 hover:text-black transition-all duration-300 text-5xl cursor-pointer"
      onClick={onClick} // Attach the onClick handler here
    />
  );
}

export default Projects_detail_btn;
