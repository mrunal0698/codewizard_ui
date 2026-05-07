import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_computer_gray_50.svg"
          className="h-[90px] w-[90px]"
          alt="computer"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.ecommerce}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory3.defaultProps = { ecommerce: "E-commerce" };

export default ModelLibraryCategory3;
