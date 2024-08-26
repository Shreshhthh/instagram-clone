import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

export const Home = () => {
  return (
    <div className="bg-gray-100 flex justify-between h-screen">
      <Navbar />

      <div className="lg:w-[28%] sm:w-[50%] md:w-[28%]">
        <Post />
      </div>

      <div className="w-[20%] md:w-[20%] sm:hidden lg:block md:block"></div>
    </div>
  );
};
