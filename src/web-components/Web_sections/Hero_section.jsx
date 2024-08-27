import React from "react";
import Btn from "./Btn_component/Btn";
import Social_Media from "./Social_icon_component/Social_Media";

function Hero_section() {
  return (
    <section className="hero_section grid grid-cols-5 bg-gradient-to-l from-indigo-950 to-black px-10 py-20 justify-center items-center">
      <div className="hero_text_wrapper col-span-3">
        <h4 className="px-4 py-3 bg-gray-600 text-white rounded-sm w-fit">Arbaz Karimi</h4>
        <h2 className="text-white my-5 text-5xl">HEY! I'M ARBAZ </h2>
        <h2 className="text-blue-400 my-5 text-5xl text-nowrap">
          I'M FRONTEND DEVELOPER{" "}
        </h2>
        <p className="text-white my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          non, eius labore hic aperiam error?
        </p>
        <Social_Media />
        <Btn />
      </div>
      <div className="hero_img col-span-2 rounded-full overflow-hidden">
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
