import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function Go_to_top_btn() {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <div
      onClick={scrollToTop} // Scroll to top when the button is clicked
      className={`animate-move1 fixed bottom-8 right-7 md:right-10 go_to_top_btn w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 transform ${
        showButton ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <MdKeyboardDoubleArrowUp className="text-white text-md" />
    </div>
  );
}

export default Go_to_top_btn;
