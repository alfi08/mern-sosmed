import React from 'react';
import {Box} from "@chakra-ui/react";

import "./Loading.css";

const Loading = () => {
  return (
    <Box d="flex" justifyContent="center" alignItems="center" h="100vh" ><div className="loader"></div></Box>
  )
}

export default Loading;
