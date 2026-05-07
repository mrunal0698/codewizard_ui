import React from "react";

import { Img, Text } from "components";

const CapabilitiesOneColumngroup52986 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_group52986.svg"
          className="h-[90px] w-[auto]"
          alt="group52986"
        />
        <Text
          className="font-inter font-semibold mb-[4px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.iacforaws}
        </Text>
      </div>
    </>
  );
};

CapabilitiesOneColumngroup52986.defaultProps = { iacforaws: "IaC for AWS" };

export default CapabilitiesOneColumngroup52986;
