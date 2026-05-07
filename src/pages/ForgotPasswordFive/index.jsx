import React from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, Img } from "components";

const ForgotPasswordFivePage = () => {
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
        <div className="h-[165px] md:h-[196px] mt-[32px] md:px-[20px] relative sm:w-[100%] w-[46%]">
          <div className="bg-gray_906 border-[1px] border-solid border-teal_A402 h-[164px] m-[auto] rounded-[8px] w-[100%]"></div>
          <div className="absolute flex flex-col gap-[12px] h-[max-content] inset-[0] items-end justify-center m-[auto] w-[95%]">
            <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start w-[100%]">
              <Img
                src="images/img_location_green_a401.svg"
                className="h-[24px] w-[24px]"
                alt="location"
              />
              <Text
                className="sm:flex-1 font-normal leading-[150.00%] not-italic text-left text-teal_A400 sm:w-[100%] w-[94%]"
                as="h6"
                variant="h6"
              >
                If there is a Replicacia account connected to this email we will
                send you a link to reset your password. This link will expire
                within 30 minutes.{" "}
              </Text>
            </div>
            <Text
              className="font-normal leading-[150.00%] not-italic text-left text-teal_A400 sm:w-[100%] w-[94%]"
              as="h6"
              variant="h6"
            >
              If you didn’t receive the mail, please try again and make sure you
              enter the email address associated with your Replicacia account
            </Text>
          </div>
        </div>
        <Text
          className="font-normal mb-[227px] mt-[19px] not-italic text-gray_50 text-left w-[auto]"
          variant="body2"
        >
          Back to login
        </Text>
      </div>
    </>
  );
};

export default ForgotPasswordFivePage;
