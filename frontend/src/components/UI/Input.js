import React, { forwardRef } from "react";
import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";

const InputEl = forwardRef((props, ref) => {
  return (
    <FormControl isInvalid={props.errmsg} mt="20px">
      <Input
        {...props}
        padding="10px"
        borderRadius="10px"
        my="5px"
        size="sm"
        ref={ref}
      />
      <FormErrorMessage my="-5px" ml="10px">
        {props.errmsg}
      </FormErrorMessage>
    </FormControl>
  );
});

export default InputEl;
