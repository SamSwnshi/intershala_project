import React, { useState } from "react";
import HamburgerIcon from "../assets/hamburger.png";
import CloseIcon from "../assets/cross.png";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div className="flex items-center justify-between w-full px-4 sm:px-10 md:px-20 lg:px-[12rem] py-4 border shadow-md bg-white">

        <div className="w-28 flex items-center justify-center">
          <img
            src={logo}
            alt="Internshala Logo"
            className="h-12 w-auto object-contain"
          />
        </div>


        <div className="hidden md:flex gap-12 text-gray-800 font-medium">
          <p>Internship</p>
          <p className="flex gap-1">
            Courses
            <span className="px-2 rounded-md bg-[#FFB357] text-white tracking-wider">
              OFFER
            </span>
          </p>
          <p>Jobs</p>
          <p>Login / Register</p>
        </div>


        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? CloseIcon : HamburgerIcon}
            alt="Menu Icon"
            className="w-6 h-6"
          />
        </button>
      </div>


      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white shadow-lg z-50 p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-semibold">Menu</p>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <img src={CloseIcon} alt="Close Icon" className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 text-gray-800 font-medium">
          <p>Internships</p>
          <p>Jobs</p>
          <p className="flex gap-1">
            Certification Courses
            <span className="text-sm px-2 bg-[#FFB357] text-white rounded-md">
              OFFER
            </span>
          </p>
          <p>Placement Guarantee Courses</p>
          <p>Contact Us</p>
          <hr className="my-2" />
          <p>Register - As a Student</p>
          <p>Register - As an Employer</p>
          <p>Login</p>
        </nav>


        <button className="mt-6 w-full bg-[#1DA1F2] text-white py-2 rounded-md font-semibold">
          Register
        </button>
      </div>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
