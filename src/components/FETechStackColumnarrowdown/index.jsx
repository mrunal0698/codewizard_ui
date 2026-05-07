import React from "react";

import { Img, Text } from "components";

const FETechStackColumnarrowdown = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_arrowdown_deep_orange_701.svg"
          className="h-[90px] w-[90px]"
          alt="arrowdown"
        />
        <Text
          className="font-inter font-semibold text-gray_50 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.htmlFive}
        </Text>
      </div>
    </>
  );
};

FETechStackColumnarrowdown.defaultProps = { htmlFive: "HTML5" };

export default FETechStackColumnarrowdown;
