import React from "react";

import { Button } from "components";

const OTPFourOtp = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[24px] items-start justify-start self-stretch w-[auto]">
          <Button className="bg-gray_902 border-[1px] border-gray_801 border-solid cursor-pointer font-inter font-medium h-[56px] py-[13px] rounded-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_50 w-[56px]">
            {props?.one}
          </Button>
          <Button className="bg-gray_902 border-[1px] border-gray_801 border-solid cursor-pointer font-inter font-medium h-[56px] py-[13px] rounded-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_50 w-[56px]">
            {props?.zero}
          </Button>
          <Button className="bg-gray_902 border-[1px] border-gray_801 border-solid cursor-pointer font-inter font-medium h-[56px] py-[13px] rounded-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_50 w-[56px]">
            {props?.one_One}
          </Button>
        </div>
        <div className="flex flex-row gap-[24px] items-start justify-start self-stretch w-[auto]">
          <Button className="bg-gray_902 border-[1px] border-gray_801 border-solid cursor-pointer font-inter font-medium h-[56px] py-[13px] rounded-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_50 w-[56px]">
            {props?.one_Two}
          </Button>
          <Button className="bg-gray_902 border-[1px] border-gray_801 border-solid cursor-pointer font-inter font-medium h-[56px] py-[13px] rounded-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_50 w-[56px]">
            {props?.zero_One}
          </Button>
          <Button className="bg-gray_902 border-[1px] border-gray_801 border-solid cursor-pointer font-inter font-medium h-[56px] py-[13px] rounded-[8px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_50 w-[56px]">
            {props?.one_Three}
          </Button>
        </div>
      </div>
    </>
  );
};

OTPFourOtp.defaultProps = {
  one: "1",
  zero: "0",
  one_One: "1",
  one_Two: "1",
  zero_One: "0",
  one_Three: "1",
};

export default OTPFourOtp;
