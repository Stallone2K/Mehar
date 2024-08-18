import Mehar from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 shadow-md z-20">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
          <div className="flex items-center w-full md:w-auto">
            <Link to="/">
              <img src={Mehar} alt="Mehar Consultant" className="h-24 w-46" />
            </Link>
            <button
              className="text-gray-600 hover:text-gray-900 md:hidden ml-auto"
              type="button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full md:flex md:w-auto md:ml-auto md:justify-center md:items-center ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 text-lg text-gray-600 text-center">
              <li>
                <Link to="/" className="hover:text-[#0ACDB7]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:text-[#0ACDB7]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Services" className="hover:text-[#0ACDB7]">
                  Services
                </Link>
              </li>
              {/* <li>
                <Link to="/Clients" className="hover:text-red-500">
                  Clients
                </Link>
              </li> */}
              <li>
                <Link to="/Jobs" className="hover:text-[#0ACDB7]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto md:ml-auto md:flex md:justify-end md:items-center">
            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 md:ml-4 hidden md:block">
              <Link to="/Contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
