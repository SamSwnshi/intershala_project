import React from "react";
import SearchTab from "./SearchTab";
import Internship from "./Internship";
import { useInternships } from "./InternshipContext";

const Home = () => {
  const { filteredInternships } = useInternships();

  return (
    <div className="px-[19rem]">
      <div className="mt-4">
        <p>Home {">"} Internships</p>
      </div>
      <div className="flex flex-col justify-end w-full text-center pl-[22rem] mt-10">
        <p>Total Internships: {filteredInternships.length}</p>
        <p>Latest Summer Internships</p>
      </div>
      <div className="flex gap-10 mt-10 w-full">
        <SearchTab />
        <Internship />
      </div>
    </div>
  );
};

export default Home;
