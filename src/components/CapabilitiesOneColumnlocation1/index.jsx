import React from "react";

import { Img, Text } from "components";

const CapabilitiesOneColumnlocation1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_location_red_903.svg"
          className="h-[90px] w-[90px]"
          alt="location"
        />
        <Text
          className="font-inter font-semibold mb-[4px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.redis}
        </Text>
      </div>
    </>
  );
};

CapabilitiesOneColumnlocation1.defaultProps = { redis: "Redis" };

export default CapabilitiesOneColumnlocation1;
