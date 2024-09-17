import React, { useState, useEffect } from "react";
import Btn from "./Btn_component/Btn";
import Social_Media from "./Social_icon_component/Social_Media";
import Section_title from "./Section_title/Section_title";

function Hero_section() {
  const textToType = "I'M A FRONTEND DEVELOPER";
  const typingSpeed = 100; // Speed of typing each character
  const delayBeforeErase = 1000; // Delay before starting to erase the text
  const delayBeforeRestart = 500; // Delay before restarting the typing animation

  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true); // Track whether typing or erasing
  const [isErasing, setIsErasing] = useState(false); // Track whether erasing

  useEffect(() => {
    let typingTimeout;

    if (isTyping) {
      // Continue typing
      if (typedText.length < textToType.length) {
        typingTimeout = setTimeout(() => {
          setTypedText((prev) => prev + textToType[prev.length]);
        }, typingSpeed);
      } else {
        // Pause before starting to erase
        typingTimeout = setTimeout(() => {
          setIsTyping(false);
          setIsErasing(true);
        }, delayBeforeErase);
      }
    } else if (isErasing) {
      // Continue erasing
      if (typedText.length > 0) {
        typingTimeout = setTimeout(() => {
          setTypedText((prev) => prev.slice(0, -1));
        }, typingSpeed);
      } else {
        // Pause before restarting typing
        typingTimeout = setTimeout(() => {
          setIsErasing(false);
          setIsTyping(true);
        }, delayBeforeRestart);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [typedText, isTyping, isErasing]);

  return (
    <section className="hero_section grid lg:grid-cols-5 px-5 lg:px-10 py-20 lg:justify-center items-center">
      <div className="hero_text_wrapper lg:col-span-3">
        <Section_title title="Arbaz Karimi" />
        <h2 className="text-white mt-5 mb-2 xl:my-5 text-2xl sm:text-3xl xl:text-5xl">
          HEY! I'M ARBAZ{" "}
        </h2>
        <h2 className="text-blue-400 mb-2 xl:my-5 text-2xl sm:text-3xl xl:text-5xl flex items-center">
          {typedText}
          <span className="ms-1 mt-1 w-[3px] inline-block bg-white h-[29px] sm:h-[34px] xl:h-[52px] animate-blink" /> {/* Blinking cursor */}
        </h2>
        <p className="text-white mt-3 mb-5 xl:my-5 text-sm md:text-lg">
          Creating responsive and visually stunning websites that turn ideas into exceptional user experiences.
        </p>
        <Social_Media />
        <div className="hero_btn flex gap-3">
          <Btn btn={"Get In Touch"} link="/Contact" />
          <a
            href="src/assets/resume/Arbaz-Karimi-resume.pdf"
            target="_blank"
            className="my-5"
          >
            <button className="w-32 md:w-40 text-md text-white py-3 px-5 border border-solid border-blue-500 transition-all duration-300 hover:bg-transparent bg-blue-500 rounded-sm">
              Resume
            </button>
          </a>
        </div>
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
