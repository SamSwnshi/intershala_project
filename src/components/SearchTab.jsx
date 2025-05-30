import React from "react";

const SearchTab = () => {
  return (
    <div className="border w-[384px] flex flex-col items-center px-2 py-8">
      <h1>Filter</h1>

      <div>
        <label className="flex flex-col">
          Profile
          <input placeholder="e.g. Marketing" />
        </label>
        <label className="flex flex-col">
          Location
          <input placeholder="e.g. Delhi" />
        </label>
        <label className="flex ">
          <input type="checkbox" />
          Work from home
        </label>
        <label className="flex ">
          <input type="checkbox" />
          Part-time
        </label>
        <label >
            Desired minimum monthly stipend (₹)
        </label>
      </div>
      <div></div>
    </div>
  );
};

export default SearchTab;
