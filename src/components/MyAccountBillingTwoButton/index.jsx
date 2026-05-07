import React from "react";

import { Img, Text } from "components";

const MyAccountBillingTwoButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[8px] items-center justify-center self-stretch md:w-[100%] w-[auto]">
          <Img
            src="images/img_plus.svg"
            className="h-[20px] w-[20px]"
            alt="plus"
          />
          <Text
            className="font-inter font-medium text-left text-teal_A400 w-[auto]"
            variant="body2"
          >
            {props?.text_Ten}
          </Text>
        </div>
      </div>
    </>
  );
};

MyAccountBillingTwoButton.defaultProps = { text_Ten: "Add new payment method" };

export default MyAccountBillingTwoButton;
