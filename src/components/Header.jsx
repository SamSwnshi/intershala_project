import React from "react";

const Header = () => {
  return (
    <div className="flex w-full px-[12rem] py-6 border shadow-md justify-between">
      <div>
        <p>Internshala</p>
      </div>
      <div className=" flex w-half gap-12">
        <p>Internship</p>
        <p className=" w-24 flex gap-1">
          Courses <span className=" w-24 px-2 rounded-md bg-[#FFB357] text-white tracking-wider">OFFER</span>
        </p>
        <p>Jobs</p>
        <p>Login / Register</p>
      </div>
    </div>
  );
};

export default Header;
