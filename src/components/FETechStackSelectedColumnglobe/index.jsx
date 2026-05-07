import React from "react";

import { Img, Text } from "components";

const FETechStackSelectedColumnglobe = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_globe_light_blue_300.svg"
          className="h-[98px] w-[auto]"
          alt="globe"
        />
        <Text
          className="font-inter font-semibold text-gray_50 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.react}
        </Text>
      </div>
    </>
  );
};

FETechStackSelectedColumnglobe.defaultProps = { react: "React" };

export default FETechStackSelectedColumnglobe;
