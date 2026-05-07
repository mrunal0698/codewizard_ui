import React from "react";

import { Img, Text } from "components";

const CapabilitiesOneColumnlocation = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_location_black_900.svg"
          className="h-[90px] mt-[22px] w-[89px]"
          alt="location"
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

CapabilitiesOneColumnlocation.defaultProps = {
  authentication: "Authentication & Authorization [OAuth]",
};

export default CapabilitiesOneColumnlocation;
