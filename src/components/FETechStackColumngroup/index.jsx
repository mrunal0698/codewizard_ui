import React from "react";

import { Img, Text } from "components";

const FETechStackColumngroup = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_group.png"
          className="h-[90px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
          alt="group"
        />
        <Text
          className="font-inter font-semibold text-gray_50 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.openuiFive}
        </Text>
      </div>
    </>
  );
};

FETechStackColumngroup.defaultProps = { openuiFive: "Open UI5" };

export default FETechStackColumngroup;
