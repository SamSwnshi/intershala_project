import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const InternshipContext = createContext();

export const InternshipProvider = ({ children }) => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://internshala.com/hiring/search"
        );
        
        const data = Object.values(response.data.internships_meta || {});
        setInternships(data);
        setFilteredInternships(data);
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };
    fetchData();
  }, []);

  const filterInternships = (criteria) => {
    let filtered = internships;


    if (criteria.profile) {
      filtered = filtered.filter((i) =>
        i.title?.toLowerCase().includes(criteria.profile.toLowerCase())
      );
    }


    if (criteria.location) {
      filtered = filtered.filter((i) =>
        String(i.location_names || "")
          .toLowerCase()
          .includes(criteria.location.toLowerCase())
      );
    }


    if (criteria.remote) {
      filtered = filtered.filter((i) =>
        String(i.location_names || "").toLowerCase().includes("work from home")
      );
    }


    if (criteria.partTime) {
      filtered = filtered.filter((i) => i.part_time === true);
    }


    if (criteria.minStipend) {
      filtered = filtered.filter((i) => {
        
        const stipendMin = Number(i.stipend_min) || 0;
        return stipendMin >= criteria.minStipend;
      });
    }


    if (criteria.maxDuration) {
      filtered = filtered.filter((i) => {
       
        const duration = Number(i.duration_months);
        return !isNaN(duration) && duration <= Number(criteria.maxDuration);
      });
    }


    if (criteria.keyword) {
      const keyword = criteria.keyword.toLowerCase();
      filtered = filtered.filter((i) => {
       
        const title = i.title?.toLowerCase() || "";
        const company = i.company_name?.toLowerCase() || "";
        const location = String(i.location_names || "").toLowerCase();
        return (
          title.includes(keyword) ||
          company.includes(keyword) ||
          location.includes(keyword)
        );
      });
    }

    setFilteredInternships(filtered);
  };

  return (
    <InternshipContext.Provider
      value={{ internships, filteredInternships, filterInternships }}
    >
      {children}
    </InternshipContext.Provider>
  );
};

export const useInternships = () => useContext(InternshipContext);
