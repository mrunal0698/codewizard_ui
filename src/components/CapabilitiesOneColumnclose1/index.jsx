import React from "react";

import { Img, Text } from "components";

const CapabilitiesOneColumnclose1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_close_deep_orange_600.svg"
          className="h-[90px] mt-[22px] w-[90px]"
          alt="close"
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

CapabilitiesOneColumnclose1.defaultProps = {
  authentication: "Authentication & Authorization [Auth0]",
};

export default CapabilitiesOneColumnclose1;
