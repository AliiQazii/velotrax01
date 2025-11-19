import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md py-3 z-50">
      <div className=" mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://velotrax.sa/assets/logo-Dw3bVQtv.png"
            alt="velotrax"
            className="h-[75px] w-[75px] mr-2 pl-0"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-[#1E1E1E] font-[600]">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <a href="#OurProgram" className="hover:text-blue-600">
              Our Program
            </a>
          </li>
          <li>
            <Link to="#OurTrucks" className="hover:text-blue-600">
              Our Trucks
            </Link>
          </li>
          <li>
            <Link to="#OurServices" className="hover:text-blue-600">
              Our Services
            </Link>
          </li>
        </ul>

        <button className="bg-gradient-radial from-[#003d70] to-[#1b84e2] text-white px-6 py-2 rounded-[164px] w-[180px] ">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Header;
