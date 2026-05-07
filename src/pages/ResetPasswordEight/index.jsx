import React from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, Img, Button } from "components";

const ResetPasswordEightPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
        <SignupOneSidebarframe529821 className="flex flex-col md:hidden justify-start md:px-[20px] w-[9%]" />
        <div className="flex flex-col items-center justify-start mt-[196px] md:px-[20px] md:w-[100%] w-[35%]">
          <Text
            className="font-semibold text-center text-gray_50 w-[auto]"
            as="h2"
            variant="h2"
          >
            Password Reset Successful
          </Text>
          <Text
            className="font-normal leading-[150.00%] mt-[14px] not-italic text-center text-gray_501 w-[100%]"
            as="h6"
            variant="h6"
          >
            You can now use your new password to log into your account
          </Text>
          <Img
            src="images/img_group52965.svg"
            className="h-[161px] mt-[32px] w-[auto]"
            alt="group52965"
          />
        </div>
        <Button className="bg-gradient  cursor-pointer font-medium mb-[174px] mt-[32px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[555px]">
          Go To Login
        </Button>
      </div>
    </>
  );
};

export default ResetPasswordEightPage;
