import React from "react";
import { Link, Text } from "@chakra-ui/react";
import Comments from "./Comments";

const PostBody = (props) => {

  return (
    <>
      <Text marginBottom="10px">
        {/* username */}
        <Link fontSize="md" fontWeight="semibold" href="#" mr="10px">
          {props.username}
        </Link>
        {/* post description */}
        {props.description}
      </Text>

      <Comments comments={props.comments} limit="2" />
    </>
  );
};

export default PostBody;
