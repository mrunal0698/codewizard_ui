import React from "react";

import { Img, Text } from "components";

const CapabilitiesOneCapabilites = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_group52988.svg"
          className="h-[90px] mt-[4px] w-[auto]"
          alt="group52988"
        />
        <Text
          className="font-inter font-semibold mb-[6px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.usermanagement}
        </Text>
      </div>
    </>
  );
};

CapabilitiesOneCapabilites.defaultProps = { usermanagement: "User Management" };

export default CapabilitiesOneCapabilites;
