import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { TbBrandMessenger } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiBars4 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="w-[13%] h-dvh border flex flex-col justify-between md:w-[20%] bg-white ">
      <div className="flex flex-col gap-10 pl-5 mt-5 justify-center">
        <img src="/igText.png" className="w-28 h-10" />
        <div>
          <ul>
            <li className="flex items-center gap-3 mb-5 cursor-pointer">
              <MdHomeFilled className="h-5 w-5" />
              <p className="sm: hidden  lg:block md:block">Home </p>
            </li>
            <li className="flex items-center gap-3 mb-5 cursor-pointer">
              <FiSearch className="h-5 w-5" />
              <p className="sm: hidden lg:block md:block">Search</p>
            </li>
            <li className="flex items-center gap-3 mb-5 cursor-pointer">
              <MdOutlineExplore className="h-5 w-5" />
              <p className="sm: hidden lg:block md:block">Explore </p>
            </li>
            <li className="flex items-center gap-3 mb-5 cursor-pointer">
              <TbBrandMessenger className="h-5 w-5" />
              <p className="sm: hidden lg:block md:block">Messages</p>
            </li>
            <li className="flex items-center gap-3 mb-5 cursor-pointer">
              <FaRegHeart className="h-4 w-4" />
              <p className="sm: hidden lg:block md:block">Notifications</p>
            </li>
            <li className="flex items-center gap-3 mb-5 cursor-pointer">
              <FiPlusSquare className="h-5 w-5" />
              <p className="sm: hidden lg:block md:block">Create</p>
            </li>
            <li className="flex items-center gap-3 mb-3 cursor-pointer">
              <CgProfile className="h-5 w-5" />
              <p className="sm: hidden lg:block md:block">Profile</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-5 pl-5 cursor-pointer">
        <HiBars4 className="h-6 w-6" />
        <p className="text-sm sm: hidden lg:block md:block">More</p>
      </div>
    </div>
  );
};

export default Navbar;
