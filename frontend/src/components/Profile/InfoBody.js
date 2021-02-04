import React from "react";
import { Box, Link } from "@chakra-ui/react";

const InfoBody = (props) => {
  return (
    <Box display={props.display} mt={props.mt}>
      {/* name */}
      <Box fontSize="23px" fontWeight="bold">
        ALfi Sahri
      </Box>

      {/* description */}
      <Box>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere non oui
        ex, dolorum et? Nulla, explicabo.
      </Box>

      {/* website */}
      <Link href="dev.to" fontWeight="bold" fontSize="17px" color="blue.600">
        dev.to
      </Link>
    </Box>
  );
};

export default InfoBody;
