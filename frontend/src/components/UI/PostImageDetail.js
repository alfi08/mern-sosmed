import React from "react";
import { Image } from "@chakra-ui/react";

const PostImageDetail = (props) => {
  return (
    <Image
      src="https://picsum.photos/id/1011/1336/768"
      w="100%"
      maxH={props.maxH || "400px"}
      alt={props.src || "post image"}
    />
  );
};

export default PostImageDetail;
