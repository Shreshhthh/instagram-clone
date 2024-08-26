import React from "react";
import { IoIosMore } from "react-icons/io";
import { user } from "../assets/post";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { LiaSmile } from "react-icons/lia";

const PostCard = ({
  userImg,
  caption,
  likes,
  captions,
  username,
  id,
  comments,
}) => {
  return (
    <div className="bg-white my-5 border border-slate-300 rounded-lg">
      <div className="flex justify-between p-3 items-center">
        <div className="flex justify-start items-center">
          <img
            src={user[id].profile_image_url}
            alt="user"
            className="w-7 h-7 rounded-full cursor-pointer"
          />
          <strong className="ml-2 cursor-pointer sm:text-sm">
            {user[id].username}
          </strong>
        </div>
        <IoIosMore className="cursor-pointer" />
      </div>
      <img src={userImg} className="cursor-pointer" />
      <div className="flex justify-between items-center">
        <div className="flex p-3 gap-5">
          <FaRegHeart className="h-4 w-4 cursor-pointer" />
          <img src="/comment.png" alt="" className="h-4 w-4 cursor-pointer" />
          <img src="/share.png" alt="" className="h-4 w-4 cursor-pointer" />
        </div>
        <FaRegBookmark className="h-4 w-4 mr-3 cursor-pointer" />
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center p-3 md:items-center sm:items-center">
          <img
            src={user[3].profile_image_url}
            alt=""
            className="w-5 h-5 absolute rounded-full border border-white"
          />
          <img
            src={user[2].profile_image_url}
            alt=""
            className="w-5 h-5 absolute ml-3 rounded-full border border-white "
          />
        </div>
        <p className="ml-6 sm:text-[1rem] md:text-sm">
          Liked by{" "}
          <strong className="cursor-pointer">{user[3].username}</strong> and{" "}
          <strong className="cursor-pointer">{likes} others</strong>
        </p>
      </div>
      <p className="pl-3">
        <strong className="cursor-pointer">{user[id].username}</strong>{" "}
        {caption}
      </p>
      <p className="text-sm md:text-sm sm:text-xs text-gray-500 pt-1 pl-3 cursor-pointer">
        View all {comments} comments
      </p>
      <hr className="mt-3 mb-2" />
      <div className="flex justify-between">
        <div className="flex items-center pl-3 mb-3">
          <LiaSmile className="h-5 w-5 cursor-pointer" />
          <input
            type="text"
            className="border-none w-full placeholder:text-gray-500 text-sm outline-none pl-2 placeholder:text-xs"
            placeholder="Add a comment..."
          />
        </div>
        <p className="text-blue-600 font-semibold mr-3 cursor-pointer text-sm">
          Post
        </p>
      </div>
    </div>
  );
};

export default PostCard;
