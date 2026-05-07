import React from "react";

import { Text } from "components";

const MyAccountBillingOneButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-[1px] border-gray_501 border-solid flex items-center justify-center px-[16px] py-[12px] rounded-[8px] shadow-bs w-[100%]">
          <Text
            className="font-inter font-medium text-gray_501 text-left w-[auto]"
            variant="body2"
          >
            {props?.text_One}
          </Text>
        </div>
      </div>
    </>
  );
};

MyAccountBillingOneButton.defaultProps = { text_One: "Current Plan" };

export default MyAccountBillingOneButton;
