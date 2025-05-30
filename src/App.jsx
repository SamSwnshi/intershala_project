import React from "react";
import Header from "./components/Header";
import Fotter from "./components/Fotter";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <Header />
      <Home />
      <Testimonial/>
      <Fotter />
    </div>
  );
};

export default App;
