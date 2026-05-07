import React from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, Button } from "components";
import OTPFourOtp from "components/OTPFourOtp";

const OTPFourPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
        <SignupOneSidebarframe529821 className="flex flex-col md:hidden justify-start md:px-[20px] w-[9%]" />
        <Text
          className="font-semibold mt-[205px] text-center text-gray_50 w-[auto]"
          as="h2"
          variant="h2"
        >
          Verify your email
        </Text>
        <Text
          className="font-normal leading-[150.00%] mt-[5px] not-italic text-center text-gray_501"
          as="h6"
          variant="h6"
        ></Text>
        <div className="flex flex-col items-center justify-start mb-[235px] mt-[32px] md:px-[20px] md:w-[100%] w-[39%]">
          <OTPFourOtp
            className="flex flex-row items-start justify-between self-stretch sm:w-[100%] w-[auto]"
            one="1"
            zero="0"
            one_One="1"
            one_Two="1"
            zero_One="0"
            one_Three="1"
          />
          {/* have to call below code if its invalid code */}
           {/* 
            <OTPThreeOtp
            className="flex flex-row items-start justify-between self-stretch sm:w-[100%] w-[auto]"
            one="1"
            zero="0"
            one_One="1"
            one_Two="1"
            zero_One="0"
            zero_Two="0"
          />
           <Text
            className="font-normal mt-[9px] not-italic text-left text-red_400 w-[auto]"
            variant="body3"
          >
            Invalid Code!
          </Text>
          <Button className="bg-teal_900 cursor-pointer font-medium mt-[15px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[472px]">
            Confirm
          </Button> */}
          <Button className="bg-gradient  cursor-pointer font-medium mt-[40px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[472px]">
            Confirm
          </Button>
          <Text
            className="font-medium mt-[18px] text-gray_501 text-left w-[auto]"
            variant="body2"
          ></Text>
        </div>
      </div>
    </>
  );
};

export default OTPFourPage;
