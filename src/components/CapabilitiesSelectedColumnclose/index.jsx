import React from "react";

import { Img, Text } from "components";

const CapabilitiesSelectedColumnclose = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_close_light_green_700.svg"
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

CapabilitiesSelectedColumnclose.defaultProps = {
  authentication: "Authentication & Authorization [Spring]",
};

export default CapabilitiesSelectedColumnclose;
