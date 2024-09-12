import React from "react";
import Btn from "./Btn_component/Btn";
import Social_Media from "./Social_icon_component/Social_Media";
import Section_title from "./Section_title/Section_title";

function Hero_section() {
  return (
    <section className="hero_section grid lg:grid-cols-5 px-5 lg:px-10 py-20 lg:justify-center items-center">
      <div className="hero_text_wrapper lg:col-span-3">
        <Section_title title = "Arbaz Karimi"/>
        <h2 className="text-white mt-5 mb-2 xl:my-5 text-2xl sm:text-3xl xl:text-5xl">HEY! I'M ARBAZ </h2>
        <h2 className="text-blue-400 mb-2 xl:my-5 text-2xl sm:text-3xl xl:text-5xl">
          I'M FRONTEND DEVELOPER{" "}
        </h2>
        <p className="text-white mt-3 mb-5 xl:my-5 text-sm md:text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          non, eius labore hic aperiam error?
        </p>
        <Social_Media />
        <Btn btn= {"Get In Touch"}/>
      </div>
      <div className="hero_img lg:col-span-2 hidden lg:block rounded-full overflow-hidden">
        <img
          src="src/assets/img/hero_section_img.png"
          className="w-full h-full object-cover object-center"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero_section;
