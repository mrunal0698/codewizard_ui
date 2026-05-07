import React from "react";

import { Img, Text } from "components";

const CapabilitiesOneColumngroup = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_group_bluegray_801.svg"
          className="h-[90px] mt-[11px] w-[auto]"
          alt="group"
        />
        <Text
          className="font-inter font-semibold mb-[15px] text-gray_50 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.dockerfile}
        </Text>
      </div>
    </>
  );
};

CapabilitiesOneColumngroup.defaultProps = { dockerfile: "Dockerfile" };

export default CapabilitiesOneColumngroup;
