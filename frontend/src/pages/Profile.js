import React, { useState, useEffect } from "react";
import { Box, Flex, Container } from "@chakra-ui/react";

import PicProfile from "../components/UI/PicProfile";
import Info from "../components/Profile/Info";
import ChoiceBtn from "../components/Profile/ChoiceBtn";
import BoxPic from "../components/Profile/BoxPic";
import PostCardDetail from "../components/PostCard/PostCardDetail";
import InfoBody from "../components/Profile/InfoBody";

import useWindowDimensions from "../hooks/useWindowDimensions";

import { POSTS_DUMMY } from "../DB";

const Profile = () => {
  const [choiceMenu, setChoiceMenu] = useState("post"); // 3 opsi => post || tag || save
  const [screenWidth, setScreenWidth] = useState(0);
  const choiceMenuHandler = (choice) => {
    setChoiceMenu(choice);
  };

  const { height, width } = useWindowDimensions();

  return (
    <Container maxW={{ base: "100%", lg: "75%" }} mt="50px">
      {/* profile header */}
      <Flex>
        {/* profile picture */}
        <Box w="30%">
          <PicProfile
            src="https://picsum.photos/id/219/500/500"
            size={{ base: "90px", sm: "150px", md: "200px" }}
          />
        </Box>
        {/* profile information */}
        <Box w="70%">
          <Info />
        </Box>
      </Flex>

      {/* info body (if in mobile view) */}
      <InfoBody display={{ base: "block", md: "none" }} mt="20px" />

      {/* profile menu btn */}
      <Flex
        justifyContent="center"
        borderTop="1px"
        borderColor="gray.300"
        my="50px"
      >
        <ChoiceBtn onClick={choiceMenuHandler} choice={choiceMenu} value="post">
          POSTS
        </ChoiceBtn>
        <ChoiceBtn onClick={choiceMenuHandler} choice={choiceMenu} value="tag">
          TAGGED
        </ChoiceBtn>
        <ChoiceBtn onClick={choiceMenuHandler} choice={choiceMenu} value="save">
          SAVED
        </ChoiceBtn>
      </Flex>

      {/* profile content */}
      <Flex flexWrap="wrap" className="mantap" w="100%">
        {POSTS_DUMMY.map((post, i) => (
          <BoxPic
            mr="1%"
            key={i}
            src={post.postImage}
            isUseModal={width > 768 ? true : false}
          >
            <PostCardDetail {...post} />
          </BoxPic>
        ))}
      </Flex>
    </Container>
  );
};

export default Profile;
