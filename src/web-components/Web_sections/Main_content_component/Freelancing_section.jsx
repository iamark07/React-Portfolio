import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

function Freelancing_section() {
  return (
    <section className="relative freelancing_section bg-[url('assets/img/freelance_bg_img.png')] bg-cover bg-center h-52 w-full">
      <div className="absolute w-full h-full inset-0 bg-black bg-opacity-50 flex flex-col sm:flex-row sm:items-center items-start justify-center sm:justify-between p-5 sm:p-10 gap-3">
        <h2 className="text-white flex items-end text-lg sm:text-3xl">
          I'm available for freelance work{" "}
          <span className="w-8 h-1 bg-white inline-block mb-1 ms-2 animate-fade-in"></span>
        </h2>
        <Link to="/Contact">  {/* Use proper syntax for the Link component */}
          <button className="text-white text-md sm:text-lg">Contact Me</button>
        </Link>
      </div>
    </section>
  );
}

export default Freelancing_section;
