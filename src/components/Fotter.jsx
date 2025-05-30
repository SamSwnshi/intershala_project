import React from "react";
import playstore from "../assets/google_play_store.png";
import applestore from "../assets/apple_app_store.png";
import insta from "../assets/instagram-brands-solid.svg";
import twitter from "../assets/twitter-brands.svg";
import youtube from "../assets/youtube-brands.svg";
import linkdin from "../assets/linkedin-in-brands.svg";

const Fotter = () => {
  return (
    <div className="tracking-wide bg-[#333333] text-white w-full min-h-fit">
      <div className="flex flex-wrap lg:flex-nowrap items-start justify-between px-4 sm:px-10 md:px-20 lg:px-[12rem] py-10 gap-10">
        <div className="flex flex-col gap-1 min-w-[200px]">
          <h3 className="mb-2 font-bold">Internships by places</h3>
          <p>Internship in India</p>
          <p>Internship in Delhi</p>
          <p>Internship in Bangalore</p>
          <p>Internship in Hyderabad</p>
          <p>Internship in Mumbai</p>
          <p>Internship in Chennai</p>
          <p>Internship in Gurgaon</p>
          <p>Internship in Kolkata</p>
          <p>Virtual internship</p>
          <p>View all internships</p>
        </div>
        <div className="flex flex-col gap-1 min-w-[200px]">
          <h3 className="mb-2 font-bold">Internships by Stream</h3>
          <p>Computer Science Internship</p>
          <p>Electronics Internship</p>
          <p>Mechanical Internship</p>
          <p>Civil Internship</p>
          <p>Marketing Internship</p>
          <p>Chemical Internship</p>
          <p>Finance Internship</p>
          <p>Summer Research Fellowship</p>
          <p>Campus Ambassador Program</p>
          <p>View all internships</p>
        </div>
        <div className="flex flex-col gap-1 min-w-[200px]">
          <h3 className="mb-2 font-bold">Jobs by Places</h3>
          <p>Jobs in Delhi</p>
          <p>Jobs in Mumbai</p>
          <p>Jobs in Bangalore</p>
          <p>Jobs in Jaipur</p>
          <p>Jobs in Kolkata</p>
          <p>Jobs in Hyderabad</p>
          <p>Jobs in Pune</p>
          <p>Jobs in Chennai</p>
          <p>Jobs in Lucknow</p>
          <p>View all Jobs</p>
        </div>
        <div className="flex flex-col gap-1 min-w-[200px]">
          <h3 className="mb-2 font-bold">Jobs by Stream</h3>
          <p>Marketing jobs</p>
          <p>Content writing jobs</p>
          <p>Web development jobs</p>
          <p>Sales jobs</p>
          <p>Finance jobs</p>
          <p>Digital Marketing jobs</p>
          <p>Computer Science jobs</p>
          <p>Graphic Design jobs</p>
          <p>Data Science jobs</p>
          <p>View all jobs</p>
        </div>
        <div className="flex flex-col gap-1 min-w-[200px]">
          <h3 className="mb-2 font-bold">Placement Guarantee Courses</h3>
          <p>Full Stack Development</p>
          <p>Internship in Delhi</p>
          <p>Data Science</p>
          <p>Human Resource Management</p>
          <p>Digital Marketing</p>
          <p>Electric Vehicle</p>
          <p>UI/UX Design</p>
          <p>Product Management</p>
          <p>Financial Modelling</p>
          <p>Supply Chain Logistics</p>
        </div>
      </div>

      <hr className="mx-4 sm:mx-10 md:mx-20 lg:mx-[15rem] mb-5 border-gray-500" />

      <div className="flex flex-wrap justify-between px-4 sm:px-10 md:px-20 lg:px-[12rem] mb-10 gap-10">
        <div className="flex flex-col gap-1 min-w-[150px]">
          <p>About Us</p>
          <p>We're hiring</p>
          <p>Hire interns for your company</p>
          <p>Post a Job</p>
        </div>
        <div className="flex flex-col gap-1 min-w-[150px]">
          <p>Team Diary</p>
          <p>Blog</p>
          <p>Our Services</p>
          <p>Free Job Alerts</p>
        </div>
        <div className="flex flex-col gap-1 min-w-[150px]">
          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Contact Us</p>
          <p>Resume Maker</p>
        </div>
        <div className="flex flex-col gap-1 min-w-[150px]">
          <p>Sitemap</p>
          <p>College TPO registration</p>
          <p>List of Companies</p>
          <p>Jobs for Women</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 px-4 sm:px-10 md:px-20 lg:px-[12rem] pb-10">
        <div className="flex gap-5">
          <img src={playstore} alt="playstore" className="h-[45px] w-auto" />
          <img src={applestore} alt="applestore" className="h-[45px] w-auto" />
        </div>

        <div className="flex gap-5 items-center">
          <img src={insta} alt="instagram" className="h-[30px] w-[30px] bg-white rounded-full" />
          <img src={twitter} alt="twitter" className="h-[30px] w-[30px]" />
          <img src={youtube} alt="youtube" className="h-[30px] w-[30px]" />
          <img src={linkdin} alt="linkedin" className="h-[30px] w-[30px]" />
        </div>

        <div className="text-center text-sm">
          <p>
            © Copyright 2025 Internshala <br />
            (Scholiverse Educare Private Limited)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
