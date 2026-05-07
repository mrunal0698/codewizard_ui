import React from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, Button } from "components";
import SignupOneColumnenteryouremail from "components/SignupOneColumnenteryouremail";

const ForgotPasswordOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
        <SignupOneSidebarframe529821 className="flex flex-col md:hidden justify-start md:px-[20px] w-[9%]" />
        <Text
          className="font-semibold mt-[200px] text-center text-gray_50 w-[auto]"
          as="h2"
          variant="h2"
        >
          Forgot Your Password?
        </Text>
        <Text
          className="font-normal leading-[150.00%] mt-[4px] not-italic text-center text-gray_501 sm:w-[100%] w-[35%]"
          as="h6"
          variant="h6"
        >
          No worries! Enter your email below and we’ll send you a link to reset
          your password.
        </Text>
        <div className="flex flex-col items-center justify-start mb-[227px] mt-[32px] md:px-[20px] md:w-[100%] w-[46%]">
          <div className="flex items-start justify-start self-stretch sm:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Email ID
              </Text>
              <SignupOneColumnenteryouremail className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col items-start justify-start p-[12px] rounded-[4px] self-stretch sm:w-[100%] w-[auto]" />
            </div>
          </div>
          <Button className="bg-teal_900 cursor-pointer font-medium mt-[32px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[555px]">
            Send link to reset
          </Button>
          <Text
            className="font-normal mt-[19px] not-italic text-gray_50 text-left w-[auto]"
            variant="body2"
          >
            Back to login
          </Text>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordOnePage;
