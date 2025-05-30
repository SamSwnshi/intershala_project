import React from "react";
import Header from "./components/Header";
import Fotter from "./components/Fotter";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <Header />
      <Home />
      <Fotter />
    </div>
  );
};

export default App;
