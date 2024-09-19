import React from "react";
import Section_title from "../Section_title/Section_title";
import Section_title_desc from "../Section_title_desc/Section_title_desc";
import { FaBusinessTime } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

function Experience_section() {
  return (
    <section className="experience_section mt-20 p-5 md:p-10 w-full overflow-x-hidden">
      <Section_title title={"Experience"} data={"fade-right"}/>
      <Section_title_desc title_desc={"My Work Experience"} data={"fade-right"}/>
      <div className="group internship_exp grid grid-cols-7 mt-10 p-5 md:p-8  bg-gradient-to-l from-cyan-950 to-cyan-800 rounded-md gap-8" data-aos="fade-left">
        <div className="certificate_image col-span-7 lg:col-span-3">
          <figure className="relative">
            <img
              src="assets/img/innovilla-internship-certificate.jpg"
              alt=""
            />
            <figcaption className="absolute top-0 left-0 w-full h-full flex flex-col justify-end bg-gradient-to-b from-black/10 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2">
              <h4 className="text-white text-center text-lg md:text-2xl">
                Web Development <br></br> Internship
              </h4>
              <h5 className="text-white text-center text-md mt-2"></h5>
            </figcaption>
          </figure>
        </div>
        <div className="about_company col-span-7 lg:col-span-4">
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            Innovilla Private Limited
          </h3>
          <p className="text-gray-200 text-md md:text-lg mt-3">
          Innovilla Private Limited Is founded by Mr. Mrityunjay Pandey and co founded by Mrs. S. Chaurasia to help out small scale businesses finding new business opoortunities using technology as core. Our Aim is to collaborate, analyze and guide with small and medium businesses and help them cope with modern business approach.
            <br></br>
            Completed web development internship at Innovilla Private Limited,
            Varanasi. Grateful to Mr. M Pandey Sir and Aman Verma Sir for their
            mentorship. Excited to apply skills gained in future endeavors.
          </p>
          <div className="duration_intern mt-5 flex flex-col md:flex-row gap-5 md:gap-14">
            <h4 className="text-gray-200 text-md md:text-lg flex gap-3 items-center">
            <FaBusinessTime className="text-xl md:text-2xl text-gray-200"/> Nov 2023 To May 2024
            </h4>
            <h4 className="text-gray-200 text-md md:text-lg flex gap-3 items-center">
            <IoTime className="text-xl md:text-2xl text-gray-200"/> Full Time
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience_section;
