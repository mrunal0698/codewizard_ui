import React from "react";

import { Img, Text } from "components";

const CapabilitiesOneColumnsettings = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_settings_cyan_a400.svg"
          className="h-[90px] w-[89px]"
          alt="settings"
        />
        <Text
          className="font-inter font-semibold mb-[3px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.hazelcast}
        </Text>
      </div>
    </>
  );
};

CapabilitiesOneColumnsettings.defaultProps = { hazelcast: "Hazelcast" };

export default CapabilitiesOneColumnsettings;
