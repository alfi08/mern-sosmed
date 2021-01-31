import React from "react";
import { Link, Text } from "@chakra-ui/react";

const PostBody = (props) => {
  return (
    <div>
      <Text marginBottom="10px">
        {/* username */}
        <Link fontSize="md" fontWeight="semibold" href="#" mr="10px">
          {props.username}
        </Link>
        {/* post description */}
        {props.description}
      </Text>
    </div>
  );
};

export default PostBody;
