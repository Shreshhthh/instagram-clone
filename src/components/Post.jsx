import React from "react";
import { posts } from "../assets/post";
import PostCard from "./PostCard";

function Post() {
  return (
    <div className="text-black overflow-scroll h-dvh">
      {posts.map((item, index) => (
        <PostCard
          key={index}
          userImg={item.image_url}
          username={item.username}
          caption={item.caption}
          likes={item.likes_count}
          comments={item.comments_count}
          id={index}
        />
      ))}
    </div>
  );
}

export default Post;
