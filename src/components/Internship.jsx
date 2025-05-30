import React from "react";
import { useInternships } from "./InternshipContext";

const Internship = () => {
  const { filteredInternships } = useInternships();

  return (
    <div className="grid gap-4 w-full sm:w-[500px] md:w-[600px] lg:w-[672px] mb-10 px-4 sm:px-0">
      {filteredInternships.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded-2xl shadow-md bg-white hover:scale-105 hover:shadow-lg transition duration-200"
        >
          <h2 className="text-md font-semibold text-black">{item.title}</h2>
          <p className="text-gray-500 mt-1">{item.company_name}</p>
          <div className="flex mt-2 text-sm gap-5 mb-2 text-gray-600 space-y-1 items-center flex-wrap">
            {item.location_names && <p>{item.location_names}</p>}
            {item.stipend.salary && <p>{item.stipend.salary}</p>}
            {item.duration && <p>{item.duration}</p>}
          </div>
          {item.posted_by_label && (
            <p className="border px-4 w-28 rounded-xl bg-green-500">
              <span className="font-thin text-sm text-white">{item.posted_by_label}</span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Internship;
