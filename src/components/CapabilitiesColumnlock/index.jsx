import React from "react";

import { Img, Text } from "components";

const CapabilitiesColumnlock = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_lock_gray_50.svg"
          className="h-[90px] mt-[22px] w-[90px]"
          alt="lock"
        />
        <Text
          className="font-inter font-semibold leading-[150.00%] text-center text-gray_50 w-[100%]"
          as="h6"
          variant="h6"
        >
          {props?.authentication}
        </Text>
      </div>
    </>
  );
};

CapabilitiesColumnlock.defaultProps = {
  authentication: "Authentication & Authorization [Basic]",
};

export default CapabilitiesColumnlock;
