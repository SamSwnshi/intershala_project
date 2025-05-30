import React from "react";
import SearchTab from "./SearchTab";
import Internship from "./Internship";

const Home = () => {
  return (
    <div className="px-[19rem] ">
      <div>
        <p>Home {">"} Internships</p>
      </div>
      <div className="flex gap-3 mt-10 w-full">
        <SearchTab />
        <Internship />
      </div>
    </div>
  );
};

export default Home;
