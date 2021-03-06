import React from "react";
import { Image } from "@chakra-ui/react";
import DefaultImageProfile from "../../assets/img/default.webp";

const PicProfile = (props) => {
  return (
    <Image
      src={props.src || DefaultImageProfile}
      w={props.size || "30px"}
      h={props.size || "30px"}
      borderRadius="50%"
      margin={props.margin}
      marginTop={props.marginTop || "0"}
      alt={props.alt || ""}
      textAlign={props.textAlign}
    />
  );
};

export default PicProfile;
