import React, { useState } from "react";
import { Box, Flex, Container } from "@chakra-ui/react";

import PicProfile from "../components/UI/PicProfile";
import Info from "../components/Profile/Info";
import ChoiceBtn from "../components/Profile/ChoiceBtn";
import BoxPic from "../components/Profile/BoxPic";
import PostCardDetail from "../components/PostCard/PostCardDetail";

const Profile = () => {
  const [choiceMenu, setChoiceMenu] = useState("post"); // 3 opsi => post || tag || save

  const choiceMenuHandler = (choice) => {
    setChoiceMenu(choice);
  };

  return (
    <Container maxW="75%" mt="50px">
      {/* profile header */}
      <Flex>
        {/* profile picture */}
        <Box w="30%">
          <PicProfile src="https://picsum.photos/id/219/500/500" size="200px" />
        </Box>
        {/* profile information */}
        <Box w="70%">
          <Info />
        </Box>
      </Flex>

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

      {/* profile body */}
      <Flex flexWrap="wrap" className="mantap" w="100%">
        <BoxPic mr="1%">
          <PostCardDetail />
        </BoxPic>
        <BoxPic mr="1%">
          <PostCardDetail />
        </BoxPic>
        <BoxPic mr="1%">
          <PostCardDetail />
        </BoxPic>
        <BoxPic mr="1%">
          <PostCardDetail />
        </BoxPic>
      </Flex>
    </Container>
  );
};

export default Profile;
