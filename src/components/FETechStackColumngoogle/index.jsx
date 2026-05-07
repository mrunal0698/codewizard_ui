import React from "react";

import { Img, Text } from "components";

const FETechStackColumngoogle = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_google.svg"
          className="h-[90px] w-[90px]"
          alt="google"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.flutter}
        </Text>
      </div>
    </>
  );
};

FETechStackColumngoogle.defaultProps = { flutter: "Flutter" };

export default FETechStackColumngoogle;
