import React, { useState, useEffect } from "react";
import { Box, Link, Text, Image, Center, Flex, Icon } from "@chakra-ui/react";
import { MdSend, MdChat } from "react-icons/md";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

import ActionButton from "./ActionPostButton";
import PicProfile from "../UI/PicProfile";
import LikeModalItem from "./LikeModalItem";
import PostCardModal from "./PostCardModal";
import Comments from "./Comments";
import AddComment from "./AddComment";

import defaultPostImg from "../../assets/img/post.png";

const PostCardHome = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeToggleHandler = () => {
    console.log("cek");
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(props.isLiked);
  }, [props.isLiked]);

  return (
    <Center>
      <Box
        boxShadow="sm"
        w={{ md: "50%" }}
        my="5"
        border="1px"
        borderColor="#ddd"
      >
        {/* post header */}
        <Flex p="10px" alignItems="center">
          <PicProfile src={props.profileImage} />
          <Box pl="13px">
            {" "}
            <Link
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="wide"
            >
              {props.username}
            </Link>
          </Box>
        </Flex>
        {/* end post header */}

        {/* post image */}
        <Box>
          <Image
            src={props.postImage || defaultPostImg}
            w="100%"
            maxH="400px"
            alt="Woman paying for a purchase"
          />
        </Box>
        {/* end post image */}

        {/* post actions */}
        <Flex py="1">
          {/* like button */}
          <ActionButton onClick={likeToggleHandler}>
            <Icon
              as={isLiked ? BsFillHeartFill : BsHeart}
              color={isLiked && "#f00"}
            />
          </ActionButton>
          {/* comment button */}
          <ActionButton mx="1">
            {/* <ChatIcon /> */}
            <Icon as={MdChat} />
            {/* send button */}
          </ActionButton>
          <ActionButton>
            <Icon as={MdSend} />
          </ActionButton>
        </Flex>
        {/* end post actions */}
        <hr />

        {/* post body */}
        <Box p="2">
          <PostCardModal title="Likes" text={`${props.like.length} likes`}>
            {props.like.map((like) => (
              <LikeModalItem
                key={like.username}
                username={like.username}
                profileImage={like.profileImage}
                isFollow={props.isFollow}
              />
            ))}
          </PostCardModal>
          <Text marginBottom="10px">
            {/* username */}
            <Link fontSize="md" fontWeight="semibold" href="#" mr="10px">
              {props.username}
            </Link>
            {/* post description */}
            {props.description}
          </Text>
          {/*  commment list */}
          <PostCardModal
            title="Comments"
            text={`view all ${props.comment.length} comments`}
            padding="15px"
          >
            <Comments comments={props.comment} />
          </PostCardModal>
          {/* end  commment list */}
          <hr />
          {/* post comment */}
          <AddComment />
          {/* end post comment */}
        </Box>
        {/* end post body */}
      </Box>
    </Center>
  );
};

export default PostCardHome;
