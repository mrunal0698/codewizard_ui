import React from "react";

import { Text } from "components";

const PaymentDetailsElevenStackcreatefromframe = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-gray_902 border-[1px] border-gray_801 border-solid h-[48px] inset-y-[0] left-[0] my-[auto] px-[12px] py-[15px] rounded-[4px] w-[54%]"></div>
        <div className="absolute flex h-[max-content] inset-[0] items-center justify-start m-[auto] self-stretch w-[auto]">
          <Text
            className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
            variant="body3"
          >
            {props?.one}
          </Text>
        </div>
      </div>
    </>
  );
};

PaymentDetailsElevenStackcreatefromframe.defaultProps = { one: "•••" };

export default PaymentDetailsElevenStackcreatefromframe;
