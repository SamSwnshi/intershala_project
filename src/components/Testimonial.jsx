import React from "react";
import star from "../assets/star_full.png";
import halfStar from "../assets/star_half.png";
import googlePlay from "../assets/google_play_store.png";

const testimonials = [
  {
    name: "Yogesh Singh",
    stars: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I got my first internship from here. Internshala is must for career oriented students. This app has a lot of opportunities for every kind of students.",
  },
  {
    name: "Yaswanth Mandapati",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "I applied to Amazon and got the job! It was my dream. The placement team helped me with everything. I learnt SQL, Python, Tableau & more.",
  },
  {
    name: "Priya Sharma",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This app helped me find internships during my 2nd year. The learning modules are super helpful and easy to follow.",
  },
];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={i} src={star} alt="star" className="w-4 h-4" />);
  }

  if (hasHalfStar) {
    stars.push(<img key="half" src={halfStar} alt="half star" className="w-4 h-4" />);
  }

  while (stars.length < 5) {
    stars.push(
      <img
        key={`empty-${stars.length}`}
        src={star}
        alt="empty star"
        className="w-4 h-4 opacity-20"
      />
    );
  }
  return stars;
};

const Testimonial = () => {
  return (
    <div className="bg-[#EEF6FF] px-4 sm:px-6 md:px-20 lg:px-40 py-12 sm:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        <div className="flex-1">
          <div className="text-3xl sm:text-4xl mb-4 font-semibold text-gray-800">
            <div className="text-5xl text-[#1DA1F2] leading-none">“</div>
            <p className="mt-2">Join the pool of 21Mn+ students and get started with your career</p>
          </div>
          <p className="mt-6 text-xs sm:text-sm text-gray-600 uppercase font-medium">
            Play Store Ratings
          </p>
          <div className="flex items-center mt-1 gap-2 text-blue-800 font-bold text-xl sm:text-2xl">
            <span>4.2</span>
            <div className="flex gap-1">{renderStars(4.2)}</div>
            <span className="text-sm text-gray-600">(39K Reviews)</span>
          </div>


          <button
            className="mt-6"
            aria-label="Download the app from Google Play"
          >
            <img
              src={googlePlay}
              alt="Get it on Google Play"
              className="h-10 w-auto"
            />
          </button>
        </div>


        <div className="flex-1 w-full overflow-x-auto no-scrollbar">
          <div className="flex gap-4 sm:gap-6 md:gap-6 w-max md:w-full snap-x snap-mandatory">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="snap-start bg-white min-w-[260px] sm:min-w-[300px] p-4 sm:p-6 rounded-xl shadow-md flex flex-col justify-between"
              >
                <p className="text-base sm:text-lg font-semibold mb-2">
                  {item.name.includes("Amazon")
                    ? "I landed a job at Amazon"
                    : "Must-have app for students"}
                </p>
                <p className="text-gray-700 text-sm sm:text-base mb-4">{item.text}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <div className="flex gap-1">{renderStars(item.stars)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
