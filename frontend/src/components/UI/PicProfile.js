import React from "react";
import { Image } from "@chakra-ui/react";
import DefaultImageProfile from "../../assets/img/default.webp";

const PicProfile = (props) => {
  return (
    <Image
      src={DefaultImageProfile}
      w={props.size || "30px"}
      h={props.size || "30px"}
      borderRadius="50%"
      marginTop={props.marginTop || ""}
      alt={props.alt || "untitle"}
    />
  );
};

export default PicProfile;
