import React from "react";
import PostCard from "../components/PostCard/PostCard";

import { POSTS_DUMMY } from "../DB";

const Home = () => {
  return (
    <>
      {POSTS_DUMMY.map((post) => (
        <PostCard {...post} key={post.username} />
      ))}
    </>
  );
};

export default Home;
