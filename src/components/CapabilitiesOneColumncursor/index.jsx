import React from "react";

import { Img, Text } from "components";

const CapabilitiesOneColumncursor = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_cursor.svg"
          className="h-[90px] w-[auto]"
          alt="cursor"
        />
        <Text
          className="font-inter font-semibold mb-[2px] text-gray_50 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.razorpay}
        </Text>
      </div>
    </>
  );
};

CapabilitiesOneColumncursor.defaultProps = { razorpay: "Razorpay" };

export default CapabilitiesOneColumncursor;
