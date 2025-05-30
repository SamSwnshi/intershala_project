import React from "react";
import SearchTab from "./SearchTab";
import Internship from "./Internship";
import { useInternships } from "./InternshipContext";

const Home = () => {
  const { filteredInternships } = useInternships();

  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-[19rem]">
      <div className="mt-4 text-sm sm:text-base">
        <p>Home {">"} Internships</p>
      </div>

      <div className="flex flex-col items-center lg:items-end text-center mt-10">
        <p className="text-sm sm:text-base">Total Internships: {filteredInternships.length}</p>
        <p className="text-base font-semibold">Latest Summer Internships</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-10 w-full">
        <SearchTab />
        <Internship />
      </div>
    </div>
  );
};

export default Home;
