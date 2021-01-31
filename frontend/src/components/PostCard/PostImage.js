import React from "react";
import { Image } from "@chakra-ui/react";

import defaultPostImg from "../../assets/img/post.png";

const PostImage = (props) => {
  return (
    <Image
      src={props.src || defaultPostImg}
      w={props.width || "100%"}
      h={props.height || "100%"}
      alt="Woman paying for a purchase"
    />
  );
};

export default PostImage;
