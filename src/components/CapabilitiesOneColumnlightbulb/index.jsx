import React from "react";

import { Img, Text } from "components";

const CapabilitiesOneColumnlightbulb = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_lightbulb.svg"
          className="h-[90px] w-[auto]"
          alt="lightbulb"
        />
        <Text
          className="font-inter font-semibold mb-[2px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.dockercompose}
        </Text>
      </div>
    </>
  );
};

CapabilitiesOneColumnlightbulb.defaultProps = {
  dockercompose: "Docker Compose",
};

export default CapabilitiesOneColumnlightbulb;
