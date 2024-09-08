import React from "react";
import Section_list from "../Section_List/Section_list";
import About_reviews_box from "./About_reviews/About_reviews_box";
import Btn from "../Btn_component/Btn";

function About_section() {
  return (
    <section className="about_section mt-44">
      <div className="about_container grid grid-cols-7 gap-10 px-10">
        <div className="about_img col-span-3 flex justify-center backdrop-blur-xl bg-opacity-50 border border-solid border-gray-500 bg-gray-700 rounded-lg">
          <img src="src/assets/img/profile_pic-2.png" alt="" />
        </div>

        <div className="about_content_container col-span-4">
          <Section_list title="About Section" />
          <h2 className="mt-5 text-white text-4xl">
            I AM AVAILABLE FOR{" "}
            <span className="text-blue-400">FRONTEND DESIGN</span> PROJECTS
          </h2>
          <p className="mt-5 text-white text-lg">
          I am a passionate Frontend Developer with experience in building responsive and user-friendly websites. I have hands-on knowledge in HTML, CSS, JavaScript, jQuery, Tailwind CSS, Bootstrap, and React.js. I am also proficient in version control using Git and managing projects through GitHub.
          </p>
          <div className="about_review_container flex gap-5 mt-10">
            <About_reviews_box review= {"Internship Experience"} time ={"7 Months"}/>
            <About_reviews_box review= {"10 Or More Projects"} time ={"Projects"}/>
            <About_reviews_box review= {"Modern Websits"} time ={"Good Skills"}/>
          </div>
          <Btn btn= {"Get In Touch"} class_name={"mt-5"}/>
        </div>
      </div>
    </section>
  );
}

export default About_section;
