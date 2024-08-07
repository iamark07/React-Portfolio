import React from "react";

function Header() {
  return (
    <header className="bg-danger d-flex justify-content-between px-5 py-3">
      <div className="logo">
        <h3 className="text-white">Logo</h3>
      </div>
      <ul className="d-flex gap-5">
        <li>
          <a href="#" className="text-white">Home</a>
        </li>
        <li>
          <a href="#" className="text-white">Home</a>
        </li>
        <li>
          <a href="#" className="text-white">Home</a>
        </li>
        <li>
          <a href="#" className="text-white">Home</a>
        </li>
        <li>
          <a href="#" className="text-white">Home</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
