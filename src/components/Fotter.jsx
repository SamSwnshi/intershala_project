import React from "react";
import playstore from "../assets/google_play_store.png";
import applestore from "../assets/apple_app_store.png";
import insta from "../assets/instagram-brands-solid.svg";
import twitter from "../assets/twitter-brands.svg";
import youtube from "../assets/youtube-brands.svg";
import linkdin from "../assets/linkedin-in-brands.svg";

const Fotter = () => {
  return (
    <div className="tracking-wide bg-[#333333] text-white max-h-screen ">
      <div className="flex items-center justify-between px-[12rem] py-10">
        <div className="flex flex-col gap-1">
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
        <div className="flex flex-col gap-1">
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
        <div className="flex flex-col gap-1">
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
        <div className="flex flex-col gap-1">
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
        <div className="flex flex-col gap-1">
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
      <hr className="px-[15rem] mb-5 w-full items-center justify-center" />
      <div className="flex items-center justify-between px-[12rem] mb-10">
        <div className="gap-1 flex flex-col">
          <p>About Us</p>
          <p>We're hiring</p>
          <p>Hire interns for your company</p>
          <p>Post a Job</p>
        </div>
        <div className="gap-1 flex flex-col">
          <p>Team Diary</p>
          <p>BLog</p>
          <p>Our Servcies</p>
          <p>Free Job Alerts</p>
        </div>
        <div className="gap-1 flex flex-col">
          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Contact Us</p>
          <p>Resume Maker</p>
        </div>
        <div className="gap-1 flex flex-col">
          <p>Sitemap</p>
          <p>College TPO registration</p>
          <p>List of Companies</p>
          <p>Jobs for Women</p>
        </div>
      </div>

      <div className="px-[12rem] flex  justify-between">
        <div className="flex-start flex">
          <div className="flex gap-7 w-full">
            <img src={playstore} alt="playstore" className="w-45 h-[45px]" />
            <img src={applestore} alt="applestore" className="w-45 h-[45px]" />
          </div>
        </div>
        <div className="flex gap-5 items-center mb-20">
          <img
            src={insta}
            alt="applestore"
            className="w-30 h-[30px] bg-white "
          />
          <img src={twitter} alt="applestore" className="w-30 h-[30px]" />
          <img src={youtube} alt="applestore" className="w-30 h-[30px]" />
          <img src={linkdin} alt="applestore" className="w-30 h-[30px]" />
        </div>
        <div>
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
