import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";  // Import useLocation from react-router-dom

// import icons
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoIosHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { FaBlog } from "react-icons/fa6";

function Header() {
  const [menu_slider, set_menu_slider] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();  // Use useLocation to get the current location

  // Define navigation links and icons
  const nav = ["Home", "About", "Contact", "Blog"];
  const nav_links = ["/", "/About", "/Contact", "/Blog"];  // Define paths for each link
  const nav_icon = [
    <IoIosHome />,
    <FaUsers />,
    <MdHomeRepairService />,
    <FaBlog />,
  ];

  // Determine the active link based on the current location
  const currentPath = location.pathname;
  const [activeLink, setActiveLink] = useState(currentPath);

  useEffect(() => {
    setActiveLink(currentPath);
  }, [currentPath]);

  // Function to toggle menu slider
  const toggleMenuSlider = () => {
    set_menu_slider(!menu_slider);
  };

  // Handle scroll to apply background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full flex justify-between items-center px-5 py-5 lg:px-10 border-b border-solid backdrop-blur-xl bg-opacity-80 border-gray-800 transition-all duration-300 ${
          isScrolled ? "bg-gray-800" : "bg-transparent"
        }`}
      >
        <div className="logo">
          <img src="assets/img/logo.png" alt="" className="w-32 md:w-40" />
        </div>
        <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <ul className="flex gap-5">
            {nav.map((links, index) => (
              <li key={links} className="flex items-center gap-2">
                <Link
                  to={nav_links[index]}  // Use Link for routing
                  className={`hover:text-blue-500 transition-all duration-300 ${
                    activeLink === nav_links[index] ? "text-blue-500" : "text-white"
                  }`}
                >
                  {links}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="page_mode_wrapper hidden md:flex gap-3 items-center">
          <IoSunnyOutline color="white" size={"18px"} />
          <div className="page_mode w-12 h-6 rounded-full bg-white p-1 cursor-pointer">
            <div className="mode_bar w-4 h-4 rounded-full bg-blue-400"></div>
          </div>
          <IoMoonOutline color="white" size={"18px"} />
        </div>
        <div className="menu_bar md:hidden" onClick={toggleMenuSlider}>
          <FiMenu className="text-white text-2xl" />
        </div>
        {/* menu slider */}
      </header>

      <div
        className={`menu_slider_section flex md:hidden fixed z-50 top-0 transition-all duration-500 w-full ${
          menu_slider ? "left-0" : "-left-full"
        }`}
      >
        <div
          className="menu_slider_wrapper backdrop-blur-xl bg-opacity-80 bg-gray-800 w-3/5 sm:w-2/5 py-12 px-8 relative border-r border-solid border-white"
          style={{ height: "100dvh" }}
        >
          <nav>
            <ul className="flex flex-col gap-5">
              {nav.map((links, index) => (
                <li key={links} className="flex items-center gap-2">
                  <Link
                    to={nav_links[index]}  // Use Link for routing
                    className={`text-lg flex gap-3 items-center hover:text-blue-500 transition-all duration-300 ${
                      activeLink === nav_links[index] ? "text-blue-500" : "text-white"
                    }`}
                  >
                    {nav_icon[index]} {/* Display the corresponding icon */}
                    {links}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="page_mode_wrapper flex gap-3 items-center absolute bottom-8">
            <IoSunnyOutline color="white" size={"18px"} />
            <div className="page_mode w-12 h-6 rounded-full bg-white p-1 cursor-pointer">
              <div className="mode_bar w-4 h-4 rounded-full bg-blue-400"></div>
            </div>
            <IoMoonOutline color="white" size={"18px"} />
          </div>
        </div>
        <div
          className="close_menu w-2/5 sm:w-3/5"
          style={{ height: "100dvh" }}
          onClick={toggleMenuSlider}
        ></div>
      </div>
    </>
  );
}

export default Header;
