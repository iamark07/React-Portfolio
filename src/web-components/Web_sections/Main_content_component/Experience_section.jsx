import React from "react";
import Section_title from "../Section_title/Section_title";
import Section_titile_desc from "../Section_title_desc/Section_title_desc";

function Experience_section() {
  return (
    <section className="experience_section p-10">
      <Section_title title={"Experience"} />
      <Section_titile_desc title_desc={"My Work Experience"} />
      <div className="group internship_exp grid grid-cols-7 mt-10 p-8 bg-slate-200 rounded-md gap-8">
        <div className="certificate_image col-span-3">
          <figure className="relative">
            <img
              src="src/assets/img/innovilla-internship-certificate.jpg"
              alt=""
            />
            <figcaption className="absolute top-0 left-0 w-full h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2">
              <h4 className="text-white text-center text-lg">
                Nov 2023 To May 2024
              </h4>
              <h5 className="text-white text-center text-md mt-2">Full Time</h5>
            </figcaption>
          </figure>
        </div>
        <div className="about_company col-span-4">
          <h3 className="text-4xl font-bold text-green-500">
            Innovilla Private Limited
          </h3>
          <p className="text-black text-lg mt-3">
          Innovilla Private Limited Is founded by Mr. Mrityunjay Pandey and co founded by Mrs. S. Chaurasia to help out small scale businesses finding new business opoortunities using technology as core. Our Aim is to collaborate, analyze and guide with small and medium businesses and help them cope with modern business approach.
            <br></br>
            Completed web development internship at Innovilla Private Limited,
            Varanasi. Grateful to Mr. M Pandey Sir and Aman Verma Sir for their
            mentorship. Excited to apply skills gained in future endeavors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience_section;
