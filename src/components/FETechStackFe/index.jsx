import React from "react";

import { Img, Text } from "components";

const FETechStackFe = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_arrowup.svg"
          className="h-[90px] w-[auto]"
          alt="arrowup"
        />
        <Text
          className="font-inter font-semibold text-gray_50 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.angular}
        </Text>
      </div>
    </>
  );
};

FETechStackFe.defaultProps = { angular: "Angular" };

export default FETechStackFe;
