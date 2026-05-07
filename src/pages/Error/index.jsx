import React from "react";

import { Text, Img, Button } from "components";

const ErrorPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mx-[auto] p-[201px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-row items-start justify-center md:w-[100%] w-[41%]">
          <Text
            className="font-extrabold text-left text-teal_A400 w-[auto]"
            variant="body1"
          >
            4
          </Text>
          <Img
            src="images/img_frame529821_40x32.png"
            className="h-[150px] md:h-[auto] ml-[8px] mt-[27px] object-cover w-[35%]"
            alt="frame529821"
          />
          <Text
            className="font-extrabold ml-[8px] text-left text-teal_A400 w-[auto]"
            variant="body1"
          >
            4
          </Text>
        </div>
        <Text
          className="font-medium mt-[45px] text-gray_50 text-left w-[auto]"
          as="h1"
          variant="h1"
        >
          We lost that page
        </Text>
        <Text
          className="font-normal mt-[15px] not-italic text-gray_501 text-left w-[auto]"
          as="h5"
          variant="h5"
        >
          Sorry, the page you are looking for doesn&#39;t exist or has been
          moved.
        </Text>
        <Button
          className="bg-gradient  cursor-pointer flex items-center justify-center min-w-[161px] mt-[56px] px-[64px] py-[10px] rounded-[4px] w-[auto]"
          leftIcon={
            <Img
              src="images/img_arrowleft.svg"
              className="mr-[8px]"
              alt="arrow_left"
            />
          }
        >
          <div className="font-medium md:px-[40px] sm:px-[20px] text-[14px] text-gray_900 text-left">
            Go To Home
          </div>
        </Button>
      </div>
    </>
  );
};

export default ErrorPage;
