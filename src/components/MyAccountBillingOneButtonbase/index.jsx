import React from "react";

import { Img, Text } from "components";

const MyAccountBillingOneButtonbase = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_plus.svg"
          className="h-[20px] w-[20px]"
          alt="plus"
        />
        <Text
          className="font-inter font-medium text-left text-teal_A400 w-[auto]"
          variant="body2"
        >
          {props?.text_Eight}
        </Text>
      </div>
    </>
  );
};

MyAccountBillingOneButtonbase.defaultProps = {
  text_Eight: "Add new payment method",
};

export default MyAccountBillingOneButtonbase;
