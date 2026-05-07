import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory9 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_frame52989.svg"
          className="h-[90px] mt-[14px] w-[auto]"
          alt="frame52989"
        />
        <Text
          className="font-inter font-semibold mb-[15px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.logistics}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory9.defaultProps = { logistics: "Logistics" };

export default ModelLibraryCategory9;
