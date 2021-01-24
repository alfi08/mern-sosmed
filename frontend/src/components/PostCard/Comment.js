import React from "react";
import { Box, Link } from "@chakra-ui/react";

const Comment = (props) => {
  return (
    <Box mb="10px">
      <Box>
        <Link mr="10px" fontWeight="bold">
          {props.username || "alfi08"}
        </Link>
        {props.body}
      </Box>
    </Box>
  );
};

export default Comment;
