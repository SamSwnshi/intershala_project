import React, { useState, useEffect } from "react";
import up from "../assets/up.png";
import down from "../assets/down.png";
import { useInternships } from "../components/InternshipContext";

const SearchTab = () => {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [minStipend, setMinStipend] = useState(0);
  const [maxDuration, setMaxDuration] = useState("");
  const [keyword, setKeyword] = useState("");

  const { filterInternships } = useInternships();

  const toggleFilters = () => {
    setShowMoreFilters((prev) => !prev);
  };

  useEffect(() => {
    filterInternships({
      profile,
      location,
      remote,
      partTime,
      minStipend,
      maxDuration,
      keyword,
    });
  }, [profile, location, remote, partTime, minStipend, maxDuration, keyword]);

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="border w-[384px] bg-white rounded-md px-5 py-6 shadow-sm">
        <h1 className="text-base font-semibold text-gray-800 mb-4 text-center">
          Filters
        </h1>

        <div className="flex flex-col gap-4">
          <label className="flex flex-col text-sm text-gray-700 font-medium">
            Profile
            <input
              type="text"
              placeholder="e.g. Marketing"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </label>

          <label className="flex flex-col text-sm text-gray-700 font-medium">
            Location
            <input
              type="text"
              placeholder="e.g. Delhi"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </label>

          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-600"
                checked={remote}
                onChange={(e) => setRemote(e.target.checked)}
              />
              Work from home
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-600"
                checked={partTime}
                onChange={(e) => setPartTime(e.target.checked)}
              />
              Part-time
            </label>
          </div>

          <div className="text-sm text-gray-700">
            <label className="font-medium">
              Desired minimum monthly stipend (₹): {minStipend}
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              step="2000"
              value={minStipend}
              onChange={(e) => setMinStipend(Number(e.target.value))}
              className="w-full mt-2 accent-blue-600"
            />
            <div className="flex justify-between text-xs mt-1 text-gray-500">
              <span>0</span>
              <span>2K</span>
              <span>4K</span>
              <span>6K</span>
              <span>8K</span>
              <span>10K</span>
            </div>
          </div>

          <div
            onClick={toggleFilters}
            className="flex justify-between text-center items-center text-sm text-blue-600 cursor-pointer mt-2"
          >
            <div className="flex items-center gap-1">
              <span>
                {showMoreFilters ? "View less filters" : "View more filters"}
              </span>
              <img
                src={showMoreFilters ? up : down}
                alt={showMoreFilters ? "Hide filters" : "Show filters"}
                className="w-4 h-4"
              />
            </div>
          </div>

          {showMoreFilters && (
            <div className="flex flex-col gap-4 mt-2">
              <label className="flex flex-col text-sm text-gray-700 font-medium">
                Starting from (or after)
                <input
                  type="date"
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </label>

              <label className="flex flex-col text-sm text-gray-700 font-medium">
                Max. duration (months)
                <input
                  type="number"
                  placeholder="e.g. 3"
                  value={maxDuration}
                  onChange={(e) => setMaxDuration(e.target.value)}
                  className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </label>

              <div className="flex flex-col gap-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  Internships with job offer
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  Fast response
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  Early applicant
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  Internships for women
                </label>
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                setProfile("");
                setLocation("");
                setRemote(false);
                setPartTime(false);
                setMinStipend(0);
                setMaxDuration("");
                setKeyword("");
              }}
              className="text-sm text-blue-600 "
            >
              Clear all
            </button>
          </div>
        </div>
      </div>

      <div className="border w-[384px] bg-white rounded-md px-5 py-6 shadow-sm mb-10">
        <h2 className="text-base font-semibold text-gray-800 mb-3 text-center">
          Keyword Search
        </h2>
        <input
          type="text"
          placeholder="e.g. Design, Mumbai, Infosys"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchTab;
