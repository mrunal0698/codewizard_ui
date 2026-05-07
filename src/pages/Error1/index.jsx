import React from "react";

import { Img, Text, Button } from "components";

const Error1Page = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mx-[auto] p-[186px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-center md:w-[100%] w-[56%]">
          <Img
            src="images/img_frame529821_40x32.png"
            className="h-[221px] md:h-[auto] mb-[15px] object-cover sm:w-[100%] w-[36%]"
            alt="frame529821"
          />
          <Text
            className="font-medium sm:ml-[0] ml-[5px] sm:mt-[0] mt-[47px] text-left text-teal_A400 w-[auto]"
            variant="body1"
          >
            ops!
          </Text>
        </div>
        <Text
          className="font-medium mt-[28px] text-gray_50 text-left w-[auto]"
          as="h1"
          variant="h1"
        >
          Something went wrong
        </Text>
        <Text
          className="font-normal mt-[16px] not-italic text-gray_501 text-left w-[auto]"
          as="h5"
          variant="h5"
        >
          We are working on fixing the problem. Please try again.
        </Text>
        <Button
          className="font-medium md:px-[40px] sm:px-[20px] text-[14px] text-gray_900 text-left"
          leftIcon={
            <Img
              src="images/img_refresh.svg"
              className="mb-[1px] mr-[8px]"
              alt="refresh"
            />
          }
        >
          <div className="bg-gradient  bg-gray_900 border-solid cursor-pointer flex items-center justify-center min-w-[161px] mt-[56px] p-[1px] px-[64px] py-[10px] rounded-[4px] w-[161px]">
            <div className="font-medium md:px-[40px] sm:px-[20px] text-[14px] text-gray_900 text-left">
              Refresh Page
            </div>
          </div>
        </Button>
      </div>
    </>
  );
};

export default Error1Page;
