import React from "react";
import { Box, Image } from "@chakra-ui/react";

import defaultPostImg from "../../assets/img/post.png";

const PostImage = (props) => {
  return (
    <Box>
      <Image
        src={props.src || defaultPostImg}
        w="100%"
        maxH="400px"
        alt="Woman paying for a purchase"
      />
    </Box>
  );
};

export default PostImage;
