import React, { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

function Header() {
  // const [btn_active, btn_inactive] = useState(false);
  // const color_cng = () => {
  //   btn_inactive(!btn_active);
  // }

  const nav = ["Home", "About", "Service", "Blog"];
  return (
    <header className="relative bg-gradient-to-l from-indigo-950 to-black border-b border-solid border-gray-800  w-full flex justify-between items-center py-5 px-10">
      <div className="logo">
        <img src="src/assets/img/logo.png" alt="" className="w-40"/>
      </div>
      <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex gap-5">
          {nav.map((links) => (
            <li key={links}>
              <a href="#" className="text-white">
                {links}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="page_mode_wrapper flex gap-3 items-center">
        <IoSunnyOutline color="white" size={"18px"} />
        <div className="page_mode w-12 h-6 rounded-full bg-white p-1 cursor-pointer">
          <div className="mode_bar w-4 h-4 rounded-full bg-blue-400"></div>
        </div>
        <IoMoonOutline color="white" size={"18px"} />
      </div>
      {/* <button onClick={color_cng} className={` ${btn_active ? 'bg-blue-500' : 'bg-red-500'} text-white py-3 px-8`}>Click</button> */}
    </header>
  );
}

export default Header;
