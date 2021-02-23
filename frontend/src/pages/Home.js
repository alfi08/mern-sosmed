import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {useSelector} from 'react-redux'

import PostCard from "../components/PostCard/PostCard";

import { POSTS_DUMMY } from "../DB";

const Home = () => {
  const history = useHistory();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.token){
      history.push("/login");
    }
  }, [auth.token]);

  return !auth.loading && (
    <>
      {POSTS_DUMMY.map((post) => (
        <PostCard {...post} key={post.username} />
      ))}
    </>
  );
};

export default Home;
